from rest_framework import serializers
from base.models import User, Posts

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['firstname', 'lastname', 'creation_date', 'last_login', 'username', 'password', 'avatar']

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = "__all__"