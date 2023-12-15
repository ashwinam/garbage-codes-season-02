from datetime import datetime

from rest_framework import serializers

from .models import BlogModel

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ('title', 'content', 'publication_date', 'author')
    
    publication_date = serializers.SerializerMethodField(method_name='format_date')

    def format_date(self, object):
        return object.publication_date.strftime("%B %d, %Y")
