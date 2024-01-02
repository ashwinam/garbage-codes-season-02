from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import Posts
from .serializer import PostSerializer


class PostsViewSet(ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
            return [IsAuthenticated()]
        return []
        

    def get_serializer_context(self):
        print(self.request.user)
        return {'current_user': self.request.user}