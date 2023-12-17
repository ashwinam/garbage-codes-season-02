from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.BlogListView.as_view()),
    path('blogs/<int:pk>/', views.BlogDetailView.as_view()),
    path('blogs/<int:pk>/like/', views.PostLike.as_view()),
    path('blogs/<int:pk>/comments/', views.CommentListView.as_view()),
    path('blogs/<int:pk>/comments/<int:id>/', views.CommentDetailView.as_view()),

]