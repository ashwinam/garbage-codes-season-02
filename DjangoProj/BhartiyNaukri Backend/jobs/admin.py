from django.contrib import admin
from .models import Jobs, Categories, CompanyImages

# Register your models here.

@admin.register(Jobs)
class JobsAdmin(admin.ModelAdmin):
    pass

@admin.register(Categories)
class CategoriesAdmin(admin.ModelAdmin):
    pass

@admin.register(CompanyImages)
class CompanyImagesAdmin(admin.ModelAdmin):
    pass