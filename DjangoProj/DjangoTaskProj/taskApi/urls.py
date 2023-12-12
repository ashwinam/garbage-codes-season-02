from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.TaskApiView.as_view()),
    path('tasks/<int:id>/', views.TaskApiView.as_view())
]