from djoser.serializers import UserCreateSerializer as BaseUserSerializer
from rest_framework import serializers
from .models import UserProfile

class UserCreateSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']

class UserProfileSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField()
    class Meta:
        model = UserProfile
        fields = ['id', 'user_id', 'birth_date', 'phone']