from django.db import models

from django_resized import ResizedImageField

import uuid

# This function returns path of an user's avatar
def avatar_upload_to(instance, filename):
    return f'avatars/{instance.id}/{filename}'

# Table User, it contains all information about specific user
class User(models.Model):
    id = models.UUIDField( 
         primary_key = True, 
         default = uuid.uuid4, 
         editable = False)
    
    firstname = models.CharField(max_length=50, null=True)
    lastname = models.CharField(max_length=50, null=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(null=True)

    username = models.CharField(max_length=200)
    password = models.CharField(max_length=50)

    avatar = ResizedImageField(
        size=[150, 150],
        keep_meta = False,
        upload_to=avatar_upload_to,
        force_format='PNG',
        default="avatars/default/default.png")
    

# Table Post, it contains all information about post
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    post_date = models.DateTimeField(auto_now_add=True)
    like_count = models.IntegerField(default=0)
    comment_count = models.IntegerField(default=0)

# Table Comment, it contains all information about comment
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=200, null=True)
    like_count = models.IntegerField(default=0)
    comment_date = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)