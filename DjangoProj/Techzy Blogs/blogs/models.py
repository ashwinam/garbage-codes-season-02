from django.db import models
from django.contrib.auth.models import User

class BlogModel(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    publication_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.ManyToManyField(User, related_name='likes', blank=True)

    def __str__(self) -> str:
        return self.title
    
class Comments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    blog = models.ForeignKey(BlogModel, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self) -> str:
        return self.user.username
