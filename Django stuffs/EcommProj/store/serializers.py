from django.db import transaction
from decimal import Decimal
from rest_framework import serializers
from .signals import order_created
from .models import Cart, CartItem, Collection, Customer, Order, OrderItem, Product, ProductImage, Review


class CollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection
        fields = ['id', 'title', 'product_count']
    
    product_count = serializers.IntegerField(read_only=True)

    def collection_count(self, collection: Collection): # this method user for serializermethodoption
        return collection.product_set.count() #type: ignore

class ProductImageSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        product_id = self.context.get('product_id')
        return ProductImage.objects.create(product_id=product_id, **validated_data)

    class Meta:
        model = ProductImage
        fields = ['id', 'image']

class ProductSerializer(serializers.ModelSerializer):

    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'title', 'slug', 'description', 'inventory', 'unit_price', 'price_with_tax', 'collection', 'images']

    # id = serializers.IntegerField()
    # title = serializers.CharField(max_length=255)
    # price = serializers.DecimalField(max_digits=6, decimal_places=2, source='unit_price')
    price_with_tax = serializers.SerializerMethodField(method_name='calculate_tax')
    # collection = serializers.HyperlinkedRelatedField(view_name='collection-details', queryset=Collection.objects.all())

    def calculate_tax(self, product: Product):
        return product.unit_price * Decimal(1.1)
    
    def validate(self, attrs): # for validating data
        return super().validate(attrs)
    
    def create(self, validated_data):
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
    

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'name', 'description', 'date']
    
    def create(self, validated_data):
        product_id = self.context.get('product_pk')
        instance = Review.objects.create(product_id=product_id, **validated_data)
        return instance

class SimpleProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'unit_price']

class CartItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()
    total_price = serializers.SerializerMethodField()

    def get_total_price(self, items):
        return items.quantity * items.product.unit_price
    
    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity', 'total_price']
    
class CartSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    def get_total_price(self, cart):
        return sum([item.quantity * item.product.unit_price for item in cart.items.all()])

    class Meta:
        model = Cart
        fields = ['id', 'items', 'total_price']

class AddItemsSerializer(serializers.ModelSerializer):
    product_id = serializers.IntegerField()

    def validate_product_id(self, value):
        if Product.objects.filter(id=value).exists():
            return value
        raise serializers.ValidationError('This product does not exists in our products.')
        

    def save(self, **kwargs):
        cart_id = self.context.get('cart_pk')
        product_id = self.initial_data.get('product_id') # type: ignore
        quantity = self.initial_data.get('quantity') # type: ignore
        if not CartItem.objects.filter(cart_id=cart_id, product_id=product_id).exists():
            # Create items
            self. instance = CartItem.objects.create(cart_id=cart_id, **self.initial_data) # type: ignore
        else:
            # Update items
            cart_item = CartItem.objects.get(cart_id=cart_id, product_id=product_id)
            cart_item.quantity += quantity
            cart_item.save()
            self. instance = cart_item
        return self.instance

    class Meta:
        model = CartItem
        fields = ['id', 'product_id', 'quantity']

class UpdateItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['quantity']

class CustomerSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Customer
        fields = ['id', 'user_id', 'phone', 'birth_date', 'membership']

class OrderItemSerializer(serializers.ModelSerializer):
    product = SimpleProductSerializer()
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'quantity', 'unit_price']

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'customer', 'placed_at', 'items', 'payment_status']

    items = OrderItemSerializer(many=True)

class UpdateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['payment_status']

class CreateOrderSerializer(serializers.Serializer):
    cart_id = serializers.UUIDField()

    def validate_cart_id(self, cart_id):
        if not Cart.objects.filter(pk=cart_id).exists():
            raise serializers.ValidationError('The given cart id is not found.')
        
        if CartItem.objects.filter(cart_id=cart_id).count() == 0:
            raise serializers.ValidationError('The Cart is Empty.')

        return cart_id

    def save(self, **kwargs):
        with transaction.atomic(): # transaction is help to rollback if anything wrong happens
            cart_id = self.validated_data.get('cart_id') # type: ignore
            customer = Customer.objects.get(user_id=self.context['user_id'])

            order = Order.objects.create(customer=customer)

            cart_items = CartItem.objects \
                .select_related('product') \
                .filter(cart_id=cart_id)


            order_items = \
            [
                OrderItem(
                    order=order, 
                    product=item.product, 
                    quantity=item.quantity, 
                    unit_price=item.product.unit_price
                    ) 
                for item in cart_items
                ]
            

            OrderItem.objects.bulk_create(order_items)
            Cart.objects.filter(id=cart_id).delete()

            order_created.send_robust(self.__class__, order=order)

            return order
