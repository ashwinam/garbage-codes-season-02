from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import Posts
from .permissions import IsAuthorOrReadOnly
from .serializer import PostSerializer


class PostsViewSet(ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
            return [IsAuthenticated(), IsAuthorOrReadOnly()]
        return []
        

    def get_serializer_context(self):
        return {'current_user': self.request.user}