from django.shortcuts import render
from djoser.views import UserViewSet as BaseUserViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from .models import Follow

class UserViewSet(BaseUserViewSet):
    
    @action(['POST'], detail=True)
    def follow(self, request, pk=None):
        queryset = Follow.objects.filter(following_id=request.user.id, follower_id=pk)
        if queryset.exists():
            queryset.delete()
        else:
            Follow.objects.create(following_id=request.user.id, follower_id=pk)

        return Response({"message": "You follow/unfollow this user."}, status=status.HTTP_200_OK)