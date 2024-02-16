from rest_framework.response import Response
from rest_framework.decorators import APIView
from rest_framework import viewsets
from base.models import User, Post, Comment
from .serializers import UserSerializer, PostSerializer, CommentSerializer
from django.http import HttpResponse
from django.shortcuts import render
import base64

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# Create your views here.
def checkCreds(request):
    username = base64.b64decode(request.GET.get('username')).decode("utf-8")
    password = base64.b64decode(request.GET.get('password')).decode("utf-8")

    result = User.objects.filter(username = username).filter(password=password).exists()

    if result:
        return HttpResponse("Record found", status=200)
    else:
        return HttpResponse("Record not found", status=404)