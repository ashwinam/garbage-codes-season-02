from djoser.serializers import UserCreateSerializer as BaseUserSerializer

class UserCreateSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        fields = ['id', 'username', 'email', 'password', 'first_name', 'last_name']