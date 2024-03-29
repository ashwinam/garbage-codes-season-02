from rest_framework import serializers
from rest_framework.settings import api_settings

from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions

from .models import Candidate, CandidateProfile, Employer, EmployerProfile

from datetime import datetime

User = get_user_model() # get the user model from which we are set

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

class SetPasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(style={'input_type': 'password'})
    confirm_password = serializers.CharField(style={'input_type': 'password'})

    def validate(self, attrs):
        new_password = attrs['new_password']
        confirm_password = attrs['confirm_password']
        user = self.context['current_user']
        
        if user:
            if new_password == confirm_password:
                try:
                    validate_password(new_password, user)
                except exceptions.ValidationError as e:
                    serializer_error = serializers.as_serializer_error(e)
                    raise serializers.ValidationError(
                        {"password": serializer_error[api_settings.NON_FIELD_ERRORS_KEY]}
                    )
            else:
                raise serializers.ValidationError("Password Mismatch!")
        else:
            raise serializers.ValidationError("User must be a logged in")
        return attrs
    
    def save(self, **kwargs):
        password = self.validated_data['new_password']
        user = self.context['current_user']
        user.set_password(password)
        user.save()
        return user
    
class EmployerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employer
        fields = ['url', 'username', 'password', 'first_name', 'last_name', 'email', 'user_type']
        extra_kwargs = {'user_type': {'read_only': True}, 'password': {'write_only': True}}


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = ['url', 'username', 'password', 'first_name', 'last_name', 'email', 'user_type']
        extra_kwargs = {'user_type': {'read_only': True}, 'password': {'write_only': True}}

class CandidateProfileSerializer(serializers.ModelSerializer):
    age = serializers.SerializerMethodField()

    def get_age(self, obj):
        current_date = datetime.date(datetime.now())
        year = (current_date - obj.date_of_birth).days
        computed_year = year // 365
        return computed_year

    class Meta:
        model = CandidateProfile
        fields = ['profile_pic', 'date_of_birth', 'age', 'gender', 'mobile_number', 'languages', 'about', 'social_network']

class MyResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CandidateProfile
        fields = ['resume', 'education_details', 'experience_details', 'awards']

class EmployerProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployerProfile
        fields = ['company_logo', 'mobile_number', 'company_name', 'company_website', 'founded_date', 'company_size', 'about_company', 'social_network']
