from django.shortcuts import get_object_or_404
from django.db.models import Count

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from .models import BlogModel, Comments
from .serializers import BlogSerializer, CommentSerializer

''' Class Based Viewsets Views '''
class BlogViewSet(ModelViewSet):
    queryset = BlogModel.objects.annotate(likes_count = Count('likes'))
    serializer_class = BlogSerializer

    def get_serializer_context(self):
        return {'current_user': self.request.user}

class CommentViewSet(ModelViewSet):
    serializer_class = CommentSerializer
    def get_queryset(self):
        pk = self.kwargs.get('blog_pk')
        return Comments.objects.filter(blog_id=pk)
    
    def get_serializer_context(self):
        blog_pk = self.kwargs.get('blog_pk')
        return {'blog_pk': blog_pk, 'current_user': self.request.user}
    
''' Class Based Generic Views '''
# class BlogListView(ListCreateAPIView):
#     queryset = BlogModel.objects.annotate(likes_count = Count('likes'))
#     serializer_class = BlogSerializer

# class BlogDetailView(RetrieveUpdateDestroyAPIView):
#     queryset = BlogModel.objects.annotate(likes_count = Count('likes'))
#     serializer_class = BlogSerializer

class PostLike(RetrieveAPIView):
    queryset = BlogModel.objects.annotate(likes_count = Count('likes'))
    def retrieve(self, request, *args, **kwargs):
        blog = self.get_object()
        if request.user in blog.likes.all():
            blog.likes.remove(request.user)
        else:
            blog.likes.add(request.user)
        return Response({'details':'Post is liked/Unliked By User.'}, status=status.HTTP_200_OK)

# class CommentListView(ListCreateAPIView):
#     serializer_class = CommentSerializer

#     def get_queryset(self):
#         pk = self.kwargs.get('pk')
#         blog = get_object_or_404(BlogModel, pk=pk)
#         return blog.comments_set.all() #type: ignore

# class CommentDetailView(RetrieveUpdateDestroyAPIView):
#     serializer_class = CommentSerializer

#     def get_queryset(self):
#         pk = self.kwargs.get('pk')
#         blog = get_object_or_404(BlogModel, pk=pk)
#         return blog.comments_set.all() #type: ignore
    
#     def get_object(self):
#         id = self.kwargs.get('id')
#         object = get_object_or_404(self.get_queryset(), pk=id)
#         return object
    
''' Function Based Views '''

# @api_view(['GET', 'POST'])
# def blog_list(request):
#     if request.method == 'GET':
#         queryset = BlogModel.objects.all()
#         serializer = BlogSerializer(queryset, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         serializer = BlogSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)

# @api_view(['GET', 'PUT', 'DELETE'])
# def blog_detail(request, pk):
#     blog = get_object_or_404(BlogModel, pk=pk)
#     if request.method == 'GET':
#         serializer = BlogSerializer(blog)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'PUT':
#         serializer = BlogSerializer(data=request.data, instance=blog)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'DELETE':
#         blog.delete()
#         return Response({'message': 'Blog deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)


# @api_view()
# def post_like(request, pk):
#     blog = get_object_or_404(BlogModel, pk=pk)
#     if request.user in blog.likes.all():
#         blog.likes.remove(request.user)
#     else:
#         blog.likes.add(request.user)
#     return Response({'details':'Post is liked/Unliked it.'}, status=status.HTTP_200_OK)





# @api_view(['GET', 'POST'])
# def comment_list(request, pk):
#     blog = get_object_or_404(BlogModel, pk=pk)
#     if request.method == 'GET':
#         queryset = blog.comments_set.all() # type:ignore
#         serializer = CommentSerializer(queryset, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         serializer = CommentSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)




# @api_view(['GET', 'PUT', 'DELETE'])
# def comment_detail(request, pk, id):
#     blog = get_object_or_404(BlogModel, pk=pk)
#     comment = get_object_or_404(Comments, pk=id)
#     if request.method == 'GET':
#         serializer = CommentSerializer(comment)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'PUT':
#         serializer = CommentSerializer(data=request.data, instance=comment)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'DELETE':
#         comment.delete()
#         return Response({"message": "comment deleted successfully."}, status=status.HTTP_204_NO_CONTENT)

