from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.TaskListView.as_view()),
    path('tasks/<int:id>/', views.TaskDetailView.as_view())
]