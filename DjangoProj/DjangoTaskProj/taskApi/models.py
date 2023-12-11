from django.db import models

class TaskModels(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=10, choices=[('In Progress', 'In Progress'), ('Complete', 'Complete')])
