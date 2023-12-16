from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.blog_list),
    path('blogs/<int:pk>/', views.blog_detail),
    path('blogs/<int:pk>/like/', views.post_like),
]