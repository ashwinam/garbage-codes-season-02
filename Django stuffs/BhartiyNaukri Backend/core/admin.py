from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

from .models import Candidate, Employer, CandidateProfile, EmployerProfile, KnownLanguage, MyResume, EducationDetails, ExperienceDetails, SocialNetwork, Awards


@admin.register(get_user_model())
class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        (_("Personal info"), {"fields": ("first_name", "last_name", "email", "user_type")}),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    list_display = ("username", "email", "first_name", "last_name", "is_staff", "user_type")

admin.site.register(Candidate)
admin.site.register(Employer)
admin.site.register(CandidateProfile)
admin.site.register(KnownLanguage)
admin.site.register(MyResume)
admin.site.register(EducationDetails)
admin.site.register(ExperienceDetails)
admin.site.register(SocialNetwork)
admin.site.register(Awards)
admin.site.register(EmployerProfile)