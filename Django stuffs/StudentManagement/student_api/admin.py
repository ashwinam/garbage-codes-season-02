from django.contrib import admin
from .models import StudentMainModel, StudentMarksMainModel, StudentMarksModel

# Register your models here.
admin.site.register(StudentMainModel)
admin.site.register(StudentMarksMainModel)
admin.site.register(StudentMarksModel)
