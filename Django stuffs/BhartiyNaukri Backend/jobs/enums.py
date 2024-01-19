from django.db import models

class JobTypes(models.TextChoices): # enums for job-types
    FREELANCE = "FREELANCE", "Freelance"
    FULL_TIME = "FULL TIME", "Full Time"
    INTERNSHIP = "INTERNSHIP", "Intership"
    PART_TIME = "PART TIME", "Part Time"
    TEMPORARY = "TEMPORARY", "Temporary"

class Gender(models.TextChoices):
    MALE = "MALE", "Male"
    FEMALE = "FEMALE", "Female"
    BOTH = "BOTH", "Both"

class JobApplyTypes(models.TextChoices):
    INTERNAL = "INTERNAL", "Internal"
    EXTERNAL_URL = "EXTERNAL URL", "External URL"
    BY_EMAIL = "BY EMAIL", "By Email"
    CALL_TO_APPLY = "CALL TO APPLY", "Call To Apply"

class SalaryTypes(models.TextChoices):
    MONTHLY = "MONTHLY", "Monthly"
    WEEKLY = "WEEKLY", "Weekly"
    HOURLY = "HOURLY", "Hourly"
    DAILY = "DAILY", "Daily" 
    YEARLY = "YEARLY", "Yearly"

class ExperienceTypes(models.TextChoices):
    INTERNSHIP = "INTERNSHIP", "Internship"
    ENTRY_LEVEL = "ENTRY LEVEL", "Entry Level"
    ASSOCIATE = "ASSOCIATE", "Associate"
    MID_SENIOR = "MID-SENIOR LEVEL", "Mid-Senior Level"
    DIRECTOR = "DIRECTOR", "Director"
    EXECUTIVE = "EXECUTIVE", "Executive"