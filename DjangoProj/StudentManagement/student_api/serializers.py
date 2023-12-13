from rest_framework import serializers
from .models import StudentMainModel

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMainModel
        fields = ['id', 'name', 'data_of_birth', 'gender', 'image']