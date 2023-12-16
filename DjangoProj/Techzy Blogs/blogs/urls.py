from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.blog_list),
    path('blogs/<int:pk>/', views.blog_detail),
    path('blogs/<int:pk>/like/', views.post_like),
    path('blogs/<int:pk>/comments/', views.comment_list),
    path('blogs/<int:pk>/comments/<int:id>/', views.comment_detail),

]