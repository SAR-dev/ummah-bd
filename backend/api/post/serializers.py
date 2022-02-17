from rest_framework import serializers
from post.models import Post
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'is_active', 'avatar']

class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['content', 'feelings', 'subject', 'video', 'link', 'status', 'blur']
        
class PostListSerializer(serializers.ModelSerializer):
    author = UserSerializer()
    class Meta:
        model = Post
        fields = ['author', 'content', 'feelings', 'subject', 'video', 'link', 'status', 'blur']