from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

from .models import Candidate, Employer

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password', 'first_name', 'last_name', 'user_type']
        extra_kwargs = {'password': {"write_only": True}}
    
    def create(self, validated_data):
        user_type = validated_data['user_type'].lower()
        password = validated_data.pop('password')
        if user_type == "candidate":
            user = Candidate.objects.create(password=make_password(password),**validated_data)
        elif user_type == "employer":
            user = Employer.objects.create(password=make_password(password),**validated_data)
        return user