# Generated by Django 5.0 on 2023-12-26 16:54

import django_resized.forms
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_alter_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=django_resized.forms.ResizedImageField(crop=['middle'], default='media/avatars/default/default.jpg', force_format='jpg', keep_meta=False, quality=-1, scale=None, size=[150, 150], upload_to='media/avatars/<django.db.models.fields.UUIDField>/'),
        ),
    ]
