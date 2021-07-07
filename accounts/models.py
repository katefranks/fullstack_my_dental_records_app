from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True,)
    display_name = models.CharField(max_length=255)
    dob = models.CharField(max_length=255)
    toothbrush_replaced = models.CharField(max_length=255)
    ins_card = models.ImageField(null=True, upload_to='profiles/')

    def __str__(self):
        return self.display_name
