from rest_framework.viewsets import ModelViewSet
 
from .serializers import EditUserSerializer, UserSerializer
from .permissions import UserPermission
from .models import User
 
class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by("-date_joined")
    permission_classes = [UserPermission]

    def get_queryset(self):
        user = self.request.user
        if not user.is_staff: # type: ignore
            return super().get_queryset().filter(id=user.id) # type: ignore
        return super().get_queryset()
    
    def get_serializer_class(self):
        user_serializer = super().get_serializer_class()
        if self.action in ['update', 'partial_update']:
            return EditUserSerializer
        return user_serializer
        