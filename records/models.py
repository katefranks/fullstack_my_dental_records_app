from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Record (models.Model):

    CLEANING = 'CLE'
    RESTORATIVE = 'RES'

    CATEGORY_CHOICES = [
        (CLEANING, 'Cleaning'),
        (RESTORATIVE, 'Restorative'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    appt_date = models.DateField(auto_now=False, blank=True, null=True,)
    category = models.CharField(max_length=3, choices=CATEGORY_CHOICES, null=True, default='CLE')
    xrays = models.BooleanField(default=False)
    xray_type = models.CharField(max_length=255, blank=True, null=True)
    provider_name = models.CharField(max_length=255, blank=True)
    services = models.TextField(blank=True)
    recommendations = models.TextField(blank=True)
    appt_img = models.ImageField(null=True, blank=True, upload_to='appointment_img/')
