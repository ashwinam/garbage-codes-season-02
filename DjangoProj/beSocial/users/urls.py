from django.urls import path

from . import views

urlpatterns = [
    path('auth/users/<int:pk>/follow/', views.UserViewSet.as_view({'get': 'follow'}))   
]