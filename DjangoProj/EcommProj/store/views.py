from .models import Product, Collection
from .serializers import CollectionSerializer, ProductSerializer

from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def product_details(request, id):
    product = get_object_or_404(Product, pk=id)
    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        if product.orderitem_set.count() > 0:
            return Response({'error': 'The product cannot be deleted because it is associated with existing order items.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        product.delete()
        return Response({'message': 'Product is deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    
@api_view()
def collection_details(request, pk):
    collection = get_object_or_404(Collection, pk=pk)
    serializer = CollectionSerializer(collection)
    return Response(serializer.data)
