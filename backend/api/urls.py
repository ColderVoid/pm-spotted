from rest_framework import routers
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static
from .views import UserViewSet, PostViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename="users")
router.register(r'posts', PostViewSet, basename="posts")
router.register(r'comments', CommentViewSet, basename="comments")

urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,document_root=settings.STATIC_URL)
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
