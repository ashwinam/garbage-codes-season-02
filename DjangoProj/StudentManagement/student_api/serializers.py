from rest_framework import serializers
from .models import StudentMainModel, StudentMarksMainModel, StudentMarksModel

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMainModel
        fields = ['id', 'name', 'data_of_birth', 'gender', 'image']

class StudentMarksMainSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMarksMainModel
        fields = ['student','marks', 'branch']

    def create(self, validated_data):
        print(validated_data, 'validated_data --')
        return super().create(validated_data)

class StudentMarksSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentMarksModel
        fields = ['student', 'marks', 'semester']

    def validate(self, data):
        if self.Meta.model.objects.filter(**dict(data)).exists():
            raise serializers.ValidationError('This student marks is already exists.')
        return super().validate(data)