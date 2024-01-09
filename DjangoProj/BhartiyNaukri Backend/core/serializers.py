from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password', 'first_name', 'last_name', 'user_type']
        extra_kwargs = {'password': {"write_only": True}}
    
    def create(self, validated_data):
        # user = User(password=make_password(validated_data['password'], **validated_data))
        # user.save()
        user = User.objects.create_user(**validated_data) # type: ignore
        return user