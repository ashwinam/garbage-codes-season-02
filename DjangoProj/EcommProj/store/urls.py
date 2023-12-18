from django.urls import path, include
from . import views

from rest_framework.routers import SimpleRouter, DefaultRouter
from rest_framework_nested import routers

router = routers.DefaultRouter()
router.register('products', views.ProductViewSet, basename='products')
router.register('collections', views.CollectionViewSet)
router.register('carts', views.CartViewSet)

product_router = routers.NestedDefaultRouter(router, 'products', lookup='product')
product_router.register('reviews', views.ReviewViewSet, basename='product-reviews')

# urlpatterns = router.urls

urlpatterns = [
    path('', include(router.urls)),
    path('', include(product_router.urls)),
    # path('products/', views.ProductList.as_view()),
    # path('products/<int:pk>/', views.ProductDetails.as_view()),
    # path('collections/', views.CollectionList.as_view()),
    # path('collections/<int:pk>/', views.CollectionDetails.as_view(), name='collection-details'),
]