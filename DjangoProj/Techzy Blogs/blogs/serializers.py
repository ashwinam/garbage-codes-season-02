from pyexpat import model
from rest_framework import serializers

from .models import BlogModel

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ('title', 'content', 'publication_date', 'author')
