from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.student_list),
    path('student_marks/', views.student_marks)
]