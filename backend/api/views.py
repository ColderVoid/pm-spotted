from rest_framework.response import Response
from rest_framework.decorators import APIView
from rest_framework import viewsets
from base.models import User, Posts
from .serializers import UserSerializer, PostsSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer