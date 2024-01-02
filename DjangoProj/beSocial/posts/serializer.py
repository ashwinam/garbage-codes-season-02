from rest_framework import serializers

from .models import Posts

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ['id', 'title', 'content', 'created_at']
    
    def create(self, validated_data):
        ModelClass = self.Meta.model
        instance = ModelClass.objects.create(author=self.context.get('current_user'), **validated_data)
        return instance

    