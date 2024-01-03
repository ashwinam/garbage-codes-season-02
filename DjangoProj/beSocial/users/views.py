from django.shortcuts import render
from djoser.views import UserViewSet as BaseUserViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from rest_framework import permissions

from .models import Follow
from .permissions import CurrentUser
from .serializers import ProfileSerializer

class UserViewSet(BaseUserViewSet):

    def get_serializer_class(self):
        if self.action == "profile":
            return ProfileSerializer
        return super().get_serializer_class()
    
    def get_permissions(self):
        if self.action == 'profile':
            return [CurrentUser()]
        return super().get_permissions()

    def get_profile(self):
        return self.request.user.profiles # type: ignore

    @action(methods=["put", "get"], detail=False)  
    def profile(self, request, *args, **kwargs):
        self.get_object = self.get_profile
        if request.method == 'GET':
            return self.retrieve(request, *args, **kwargs)
        elif request.method == 'PUT':
            return self.update(request, *args, **kwargs)

    @action(['POST'], detail=True)
    def follow(self, request, pk=None):
        queryset = Follow.objects.filter(following_id=request.user.id, follower_id=pk)
        if queryset.exists():
            queryset.delete()
        else:
            Follow.objects.create(following_id=request.user.id, follower_id=pk)

        return Response({"message": "You follow/unfollow this user."}, status=status.HTTP_200_OK)