from rest_framework import routers
from django.urls import path, include
from . import views
from .views import UserViewSet, PostsViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename="users")
router.register(r'posts', PostsViewSet, basename="posts")

urlpatterns = [
    path('', include(router.urls)),
]
