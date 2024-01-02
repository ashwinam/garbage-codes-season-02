from rest_framework.viewsets import ModelViewSet

from .models import Posts
from .serializer import PostSerializer


class PostsViewSet(ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer