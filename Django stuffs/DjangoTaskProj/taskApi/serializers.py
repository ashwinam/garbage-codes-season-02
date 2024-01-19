from rest_framework import serializers
from .models import TaskModels

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModels
        fields = ['id', 'title', 'description', 'status']