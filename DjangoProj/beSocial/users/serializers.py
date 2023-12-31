from rest_framework import serializers
from djoser.serializers import UserSerializer as BaseUserSerializer, UserCreateSerializer as BaseUserCreateSerializer

from .models import UserProfile

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['username', 'email', 'password', 'first_name', 'last_name']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'description', 'avtar', 'user']

class UserSerializer(BaseUserSerializer):
    profiles = ProfileSerializer(read_only=True)
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    def get_following_count(self, obj):
        return obj.followings.count()
    
    def get_followers_count(self, obj):
        return obj.followers.count()

    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profiles', 'followers_count', 'following_count']