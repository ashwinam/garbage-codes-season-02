from django.contrib import admin
from . import models

@admin.register(models.BlogModel)
class BlogAdmin(admin.ModelAdmin):
    autocomplete_fields = ['author']
    list_display = ['title', 'content', 'publication_date', 'author']
    list_editable = ['author']
    search_fields = ['title']
