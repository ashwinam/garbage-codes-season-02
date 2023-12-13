from rest_framework import serializers
from .models import StudentMainModel, StudentMarksMainModel

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMainModel
        fields = ['id', 'name', 'data_of_birth', 'gender', 'image']

class StudentMarksMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMarksMainModel
        fields = ['student','branch']

    def create(self, validated_data):
        print(validated_data, 'validated_data --')
        return super().create(validated_data)