from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings

from .models import CandidateProfile, Candidate


@receiver(post_save, sender=Candidate)
def create_profile_for_new_candidate(sender, **kwargs):
    if kwargs['created'] and kwargs['instance'].user_type == "CANDIDATE":
        CandidateProfile.objects.create(user=kwargs['instance'])