from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=50, null=True)
    lastname = models.CharField(max_length=50, null=True)
    creation_date = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(null=True)

    username = models.CharField(max_length=200)
    password = models.CharField(max_length=50)

    avatar = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, null=True)

class Posts(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)