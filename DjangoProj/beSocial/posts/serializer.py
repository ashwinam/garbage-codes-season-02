from rest_framework import serializers

from .models import Posts

class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(read_only=True)
    class Meta:
        model = Posts
        fields = ['id', 'title', 'content', 'created_at', 'author']
    
    def create(self, validated_data):
        ModelClass = self.Meta.model
        instance = ModelClass.objects.create(author=self.context.get('current_user'), **validated_data)
        return instance

    