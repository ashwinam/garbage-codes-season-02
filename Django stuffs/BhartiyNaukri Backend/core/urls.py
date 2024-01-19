from django.urls import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('users', views.UserViewSet, basename="user")
router.register('employers', views.EmployerViewSet, basename="employer")
router.register('candidates', views.CandidateViewSet, basename="candidate")
urlpatterns = router.urls