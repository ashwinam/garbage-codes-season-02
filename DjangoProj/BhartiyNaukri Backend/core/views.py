from rest_framework.viewsets import ModelViewSet
 
from .serializers import UserSerializer
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
        