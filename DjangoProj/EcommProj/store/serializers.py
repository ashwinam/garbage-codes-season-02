from unittest.util import _MAX_LENGTH
from .models import Collection, Product
from decimal import Decimal
from rest_framework import serializers

class CollectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collection
        fields = ['id', 'title']

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'title', 'unit_price', 'price_with_tax', 'collection']

    # id = serializers.IntegerField()
    # title = serializers.CharField(max_length=255)
    # price = serializers.DecimalField(max_digits=6, decimal_places=2, source='unit_price')
    price_with_tax = serializers.SerializerMethodField(method_name='calculate_tax')
    collection = serializers.HyperlinkedRelatedField(view_name='collection-details', queryset=Collection.objects.all())

    def calculate_tax(self, product: Product):
        return product.unit_price * Decimal(1.1)