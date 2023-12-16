from datetime import datetime
from rest_framework import serializers

from .models import BlogModel, Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'user', 'comment', 'blog']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ['id', 'title', 'content', 'publication_date', 'author', 'likes', 'likes_count', 'comments']
    
    likes_count = serializers.IntegerField(source='likes.count')
    comments = serializers.SerializerMethodField(method_name='comment_list')
    
    publication_date = serializers.SerializerMethodField(method_name='format_date')

    def format_date(self, object):
        return object.publication_date.strftime("%B %d, %Y")
    
    def comment_list(self, object):
        queryset = object.comments_set.all()
        serializer = CommentSerializer(queryset, many=True)
        return serializer.data
