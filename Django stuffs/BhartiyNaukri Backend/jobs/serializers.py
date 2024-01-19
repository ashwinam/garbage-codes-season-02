from rest_framework import serializers
from .models import JobApplication, Jobs

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = ['url', 'id', 'user', 'featured_images', 'title','deescription', 'categories','type', 'gender','apply_type', 'external_url','email_for_apply_job', 'salary_type','min_salary', 'max_salary','experience_type', 'min_experience','max_experience', 'company_images','application_deadline']

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['applicant', 'job', 'resume', 'message']