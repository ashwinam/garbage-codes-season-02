from django.db import models
from django.conf import settings

from .enums import JobTypes, Gender, JobApplyTypes, SalaryTypes, ExperienceTypes

class Categories(models.Model):
    title = models.CharField(max_length=255)

class CompanyImages(models.Model):
    image = models.ImageField(verbose_name="Comapany Images", upload_to='job/company_images')

class Jobs(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='jobs')
    featured_images = models.ImageField(upload_to='jobs/featured_images/', null=True, blank=True)
    title = models.CharField(max_length=255)
    deescription = models.TextField()
    categories = models.ForeignKey(Categories, on_delete=models.PROTECT, related_name='categories')
    type = models.CharField(max_length=50, choices=JobTypes.choices)
    gender = models.CharField(max_length=10, choices=Gender.choices)
    apply_type = models.CharField(max_length=50, choices=JobApplyTypes.choices)
    external_url = models.URLField(null=True, blank=True)
    email_for_apply_job = models.EmailField(null=True, blank=True)
    salary_type = models.CharField(max_length=50, choices=SalaryTypes.choices)
    min_salary = models.PositiveIntegerField(null=True, blank=True)
    max_salary = models.PositiveIntegerField(null=True, blank=True)
    experience_type = models.CharField(max_length=50, choices=ExperienceTypes.choices)
    min_experience = models.PositiveSmallIntegerField(null=True, blank=True)
    max_experience = models.PositiveSmallIntegerField(null=True, blank=True)
    company_images = models.ManyToManyField(CompanyImages, blank=True, related_name="company_images")
    application_deadline = models.DateField()
    created_to = models.DateField(auto_now_add=True)
    updated_to = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
