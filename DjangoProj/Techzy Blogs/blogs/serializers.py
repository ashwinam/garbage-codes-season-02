from datetime import datetime
from os import read
from rest_framework import serializers

from .models import BlogModel, Comments

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'user', 'comment', 'blog']

    user = serializers.CharField(read_only=True)
    blog = serializers.CharField(read_only=True)
    
    def create(self, validated_data):
        blog_pk = self.context.get('blog_pk')
        user = self.context.get('current_user')
        instance = Comments.objects.create(user=user, blog_id=blog_pk, **validated_data)
        return instance

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ['id', 'title', 'content', 'publication_date', 'author', 'likes', 'likes_count', 'comments']
    
    likes = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    likes_count = serializers.IntegerField(read_only=True)
    comments = serializers.SerializerMethodField(method_name='comment_list')
    
    publication_date = serializers.SerializerMethodField(method_name='format_date')

    def format_date(self, object):
        return object.publication_date.strftime("%B %d, %Y")
    
    def comment_list(self, object):
        queryset = object.comments_set.all()
        serializer = CommentSerializer(queryset, many=True)
        return serializer.data
