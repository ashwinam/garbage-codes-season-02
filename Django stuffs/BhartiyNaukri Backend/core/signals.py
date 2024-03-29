from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings

from .models import CandidateProfile, Candidate, Employer, EmployerProfile


@receiver(post_save, sender=Candidate)
def create_profile_for_new_candidate(sender, **kwargs):
    if kwargs['created'] and kwargs['instance'].user_type == "CANDIDATE":
        CandidateProfile.objects.create(user=kwargs['instance'])

@receiver(post_save, sender=Employer)
def create_profile_for_new_employer(sender, **kwargs):
    if kwargs['created'] and kwargs['instance'].user_type == "EMPLOYER":
        EmployerProfile.objects.create(user=kwargs['instance'])