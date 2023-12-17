from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.StudentListView.as_view()),
    path('student_marks/', views.StudentMarksView.as_view()),
    path('student_marks/<int:pk>/', views.StudentMarksView.as_view()),
]