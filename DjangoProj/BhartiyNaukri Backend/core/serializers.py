from rest_framework import serializers
from rest_framework.settings import api_settings
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions

from .models import Candidate, Employer
import djoser.serializers
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password', 'first_name', 'last_name', 'user_type']
        extra_kwargs = {'password': {"write_only": True, 'style': {"input_type": "password"}}}

    def validate_password(self, password):
        try:
            validate_password(password)
        except exceptions.ValidationError as e:
            serializer_error = serializers.as_serializer_error(e)
            raise serializers.ValidationError(
                {"password": serializer_error[api_settings.NON_FIELD_ERRORS_KEY]}
            )
        
        return password

    
    def create(self, validated_data):
        user_type = validated_data['user_type'].lower()
        password = validated_data.pop('password')
        if user_type == "candidate":
            user = Candidate.objects.create(password=make_password(password),**validated_data)
        elif user_type == "employer":
            user = Employer.objects.create(password=make_password(password),**validated_data)
        return user
    
class EditUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']