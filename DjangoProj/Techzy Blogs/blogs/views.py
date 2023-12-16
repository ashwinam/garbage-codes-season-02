from django.shortcuts import get_object_or_404
from django.db.models import Count

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import BlogModel
from .serializers import BlogSerializer

@api_view(['GET', 'POST'])
def blog_list(request):
    if request.method == 'GET':
        queryset = BlogModel.objects.all()
        serializer = BlogSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = BlogSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def blog_detail(request, pk):
    blog = get_object_or_404(BlogModel, pk=pk)
    if request.method == 'GET':
        serializer = BlogSerializer(blog)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = BlogSerializer(data=request.data, instance=blog)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        blog.delete()
        return Response({'message': 'Blog deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
    
@api_view()
def post_like(request, pk):
    blog = get_object_or_404(BlogModel, pk=pk)
    if request.user in blog.likes.all():
        blog.likes.remove(request.user)
    else:
        blog.likes.add(request.user)
    return Response({'details':'Post is liked/Unliked it.'}, status=status.HTTP_200_OK)
