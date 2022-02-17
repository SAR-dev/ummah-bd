from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFit
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('trashed', 'Trashed'),
    )
    
    FEELINGS_CHOICES = (
        ('watching', 'Watching'),
        ('drinking', 'Drinking'),
        ('eating', 'Eating'),
    )
    
    content = models.TextField(default=None)
    feelings = models.CharField(
        max_length=10, choices=FEELINGS_CHOICES, default=None, null=True, blank=True)
    subject = models.CharField(
        max_length=50, default=None, null=True, blank=True)
    video = models.URLField(default=None, null=True, blank=True)
    link = models.URLField(default=None, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    status = models.CharField(
        max_length=10, choices=STATUS_CHOICES, default='published')
    blur = models.BooleanField(default=False)

    def __str__(self):
        return str(self.author)
