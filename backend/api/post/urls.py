from django.urls import path
from post.views import PostCreateView, PostListView

app_name = 'post'

urlpatterns = [
    path('create/', PostCreateView.as_view(), name='post-create'),
    path('', PostListView.as_view(), name='post-list'),
]
