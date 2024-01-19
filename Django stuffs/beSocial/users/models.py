from django.conf import settings
from django.contrib.auth. models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profiles")
    description = models.TextField(null=True, blank=True)
    avtar = models.ImageField(upload_to="users/profile_pics/")

    def __str__(self) -> str:
        return self.user.username
    
class Follow(models.Model):
    following = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="followings")
    follower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="followers")
    created_at = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = [['following', 'follower']]
    
    def __str__(self) -> str:
        return f'{self.follower} follows {self.following}'