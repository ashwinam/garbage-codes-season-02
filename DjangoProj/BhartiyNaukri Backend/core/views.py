from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
 
from .serializers import CandidateSerializer, EditUserSerializer, EmployerSerializer, SetPasswordSerializer, UserSerializer
from .permissions import SetPasswordPermission, UserPermission
from .models import Candidate, Employer, User
 
class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by("-date_joined")
    permission_classes = [UserPermission]

    def get_permissions(self):
        if self.action == 'set_password':
            return [SetPasswordPermission()]
        return super().get_permissions()
    
    def get_serializer_context(self):
        if self.action == 'set_password':
            return {'current_user': self.request.user}
        return super().get_serializer_context()

    def get_queryset(self):
        user = self.request.user
        if not user.is_staff: # type: ignore
            return super().get_queryset().filter(id=user.id) # type: ignore
        return super().get_queryset()
    
    def get_serializer_class(self):
        user_serializer = super().get_serializer_class()
        if self.action in ['update', 'partial_update']:
            return EditUserSerializer
        elif self.action == 'set_password':
            return SetPasswordSerializer
        return user_serializer
    
    @action(methods=['POST'], detail=False, permission_classes=[SetPasswordPermission])
    def set_password(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "Password changed successfully"}, status=status.HTTP_200_OK)
    
    
class EmployerViewSet(ModelViewSet):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer
    permission_classes = [IsAdminUser]


class CandidateViewSet(ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    permission_classes = [IsAdminUser]
