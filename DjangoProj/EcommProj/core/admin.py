from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from store.models import Product
from tags.models import TaggedItem
from store.admin import ProductAdmin

class TagTabularInline(GenericTabularInline):
    model = TaggedItem
    autocomplete_fields = ['tag']

class CustomProductAdmin(ProductAdmin):
    inlines = [TagTabularInline]

admin.site.unregister(Product)
admin.site.register(Product, CustomProductAdmin)
