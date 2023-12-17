from .models import Product, Collection, OrderItem
from .serializers import CollectionSerializer, ProductSerializer

from django.db.models import Count
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.select_related('collection').all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {'request': self.request}
    
    def destroy(self, request, *args, **kwargs):
        if OrderItem.objects.filter(product_id=kwargs['pk']).count() > 0:
            return Response({'error': 'The product cannot be deleted because it is associated with existing order items.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().destroy(request, *args, **kwargs)
    
class CollectionViewSet(ModelViewSet):
    queryset = Collection.objects.annotate(product_count=Count('product'))
    serializer_class = CollectionSerializer

    def destroy(self, request, *args, **kwargs):
        if Product.objects.filter(collection_id=kwargs['pk']).count() > 0:
            return Response({'error': 'The collection cannot be deleted because it is associated with existing products.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().destroy(request, *args, **kwargs)


# class ProductList(ListCreateAPIView):
#     queryset = Product.objects.select_related('collection').all()
#     serializer_class = ProductSerializer

#     def get_serializer_context(self):
#         return {'request': self.request}


# class ProductDetails(RetrieveUpdateDestroyAPIView):
#     queryset = Product.objects.select_related('collection').all()
#     serializer_class = ProductSerializer
    
#     def delete(self, request, pk):
#         product = get_object_or_404(Product, pk=pk)
#         if product.orderitem_set.count() > 0: # type: ignore
#             return Response({'error': 'The product cannot be deleted because it is associated with existing order items.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
#         product.delete()
#         return Response({'message': 'Product is deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)



# class CollectionList(ListCreateAPIView):
#     queryset = Collection.objects.annotate(product_count=Count('product'))
#     serializer_class = CollectionSerializer

    

# class CollectionDetails(RetrieveUpdateDestroyAPIView):
#     queryset = Collection.objects.annotate(product_count=Count('product'))
#     serializer_class = CollectionSerializer

#     def delete(self, request, pk):
#         collection = get_object_or_404(Collection, pk=pk)
#         if collection.product_set.count() > 0: #type: ignore
#             return Response({'error': 'The collection cannot be deleted because it is associated with existing products.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
#         collection.delete()
#         return Response({'message': 'Collection deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
