from django.urls import path, include
from rest_framework_nested.routers import DefaultRouter

from .views import UserProfileViewsets

router = DefaultRouter()
router.register('', UserProfileViewsets)

urlpatterns = [
    path('', include(router.urls))
]