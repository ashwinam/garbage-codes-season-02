from django.core import exceptions

from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet

from .serializers import CandidateProfileSerializer, CandidateSerializer, EditUserSerializer, EmployerSerializer, SetPasswordSerializer, UserSerializer
from .permissions import SetPasswordPermission, UserPermission
from .models import Candidate, Employer, User
 
class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by("-date_joined")
    permission_classes = [UserPermission]

    def get_permissions(self):
        if self.action == 'set_password':
            return [SetPasswordPermission()]
        elif self.action == 'profile':
            return [IsAuthenticated()]
        return super().get_permissions()
    
    def get_serializer_context(self):
        if self.action == 'set_password':
            return {'current_user': self.request.user}
        return super().get_serializer_context()

    def get_queryset(self):
        user = self.request.user
        if not user.is_staff:
            return super().get_queryset().filter(id=user.id)
        return super().get_queryset()
    
    def get_serializer_class(self):
        user_serializer = super().get_serializer_class()
        if self.action in ['update', 'partial_update']:
            return EditUserSerializer
        elif self.action == 'set_password':
            return SetPasswordSerializer
        elif self.action == 'profile':
            return CandidateProfileSerializer
        return user_serializer

    def get_profile_instance(self):
        return self.request.user.candidate_profile

    @action(methods=['POST'], detail=False, permission_classes=[SetPasswordPermission])
    def set_password(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "Password changed successfully"}, status=status.HTTP_200_OK)
    
    @action(methods=['GET', 'PUT'], detail=False)
    def profile(self, request):
        try:
            self.get_object = self.get_profile_instance
        except Exception as e:
            return Response({'message': 'Something went wrong!'}, status=status.HTTP_204_NO_CONTENT)
        if request.method == 'GET':
            return self.retrieve(request)
        elif request.method == 'PUT':
            return self.update(request)
    
    
class EmployerViewSet(ModelViewSet):
    queryset = Employer.objects.all()
    serializer_class = EmployerSerializer
    permission_classes = [IsAdminUser]


class CandidateViewSet(ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    permission_classes = [IsAdminUser]
