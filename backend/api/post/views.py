from rest_framework.views import APIView
from post.models import Post
from rest_framework import generics, views, response, permissions, serializers
from rest_framework.exceptions import NotFound
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import get_object_or_404
from post.serializers import PostCreateSerializer, PostListSerializer

class PostCreateView(generics.CreateAPIView):
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostCreateSerializer
    
class PostListView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostListSerializer