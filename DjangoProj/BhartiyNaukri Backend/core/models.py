from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.query import QuerySet
from django.utils.translation import gettext_lazy as _


class User(AbstractUser):
    # issue: Create a one type for admin, for admins purposes(superuser also usertype are candidate due to base_type)
    class Types(models.TextChoices): #ENUM for types
        EMPLOYER = "EMPLOYER", "Employer"
        CANDIDATE = "CANDIDATE", "Candidate"
    
    base_type = Types.CANDIDATE # By default type selected

    email = models.EmailField(unique=True)
    user_type = models.CharField(_("Types"), max_length=100, choices=Types.choices, default=base_type)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.user_type = self.base_type
        return super().save(*args, **kwargs)

""" Managers for different user types """

class EmployerManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(user_type=User.Types.EMPLOYER)

class CandidateManager(models.Manager):
    def get_queryset(self) -> QuerySet:
        return super().get_queryset().filter(user_type=User.Types.CANDIDATE)
    
""" Proxy Models for different users types """

class Employer(User):
    base_type = User.Types.EMPLOYER
    objects = EmployerManager()

    class Meta:
        proxy = True


class Candidate(User):
    base_type = User.Types.CANDIDATE
    objects = CandidateManager()

    class Meta:
        proxy = True
