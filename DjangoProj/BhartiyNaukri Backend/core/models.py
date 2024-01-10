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

""" CandidateProfile """
        
class KnownLanguage(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)

class SocialNetwork(models.Model):
    network_name = models.CharField(max_length=100, null=True)
    url = models.URLField()

class MyResume(models.Model):
    resume = models.FileField(upload_to="candidate/resumes/", null=True, blank=True)

class EducationDetails(models.Model):
    title = models.CharField(max_length=100, null=True)
    institute_name = models.CharField(max_length=255, null=True)
    from_date = models.DateField(null=True)
    to_date = models.DateField(null=True)

class ExperienceDetails(models.Model):
    title = models.CharField(max_length=100, null=True)
    company_name = models.CharField(_('Company'), max_length=255, null=True)
    from_date = models.DateField(null=True)
    to_date = models.DateField(null=True)
    description = models.TextField(null=True)

class Awards(models.Model):
    title = models.CharField(max_length=100, null=True)
    year = models.DateField(null=True)
    description = models.TextField(null=True)

        
class CandidateProfile(models.Model):

    GENDERS = [
        ("Male", "Male"),
        ("Female", "Female"),
        ("Other", "Other"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='candidate_profile')
    profile_pic = models.ImageField(upload_to='candidate/profile_pictures/', null=True, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=100, choices=GENDERS, null=True, blank=True)
    mobile_number = models.CharField(max_length=11, null=True, blank=True)
    languages = models.ManyToManyField(KnownLanguage, blank=True)
    about = models.TextField(null=True, blank=True)
    social_network = models.ManyToManyField(SocialNetwork, blank=True)
    resume = models.ForeignKey(MyResume, on_delete=models.CASCADE, related_name='resumes', null=True)
    education_details = models.ManyToManyField(EducationDetails, related_name='educations', blank=True)
    experience_details = models.ManyToManyField(ExperienceDetails, related_name='experience', blank=True)
    awards = models.ManyToManyField(Awards, related_name='awards', blank=True)

    def __str__(self) -> str:
        return self.user.get_full_name() if self.user.get_full_name() else self.user.username