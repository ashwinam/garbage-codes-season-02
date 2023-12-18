from django.urls import path, include
from rest_framework_nested import routers

from . import views

router = routers.DefaultRouter()
router.register('blogs', views.BlogViewSet)

blog_router = routers.NestedDefaultRouter(router, 'blogs', lookup='blog')
blog_router.register('comments', views.CommentViewSet, basename='blog-comments')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(blog_router.urls)),
    # path('blogs/', views.BlogListView.as_view()),
    # path('blogs/<int:pk>/', views.BlogDetailView.as_view()),
    path('blogs/<int:pk>/like/', views.PostLike.as_view()),
    # path('blogs/<int:pk>/comments/', views.CommentListView.as_view()),
    # path('blogs/<int:pk>/comments/<int:id>/', views.CommentDetailView.as_view()),

]