from django.db import models
from django.conf import settings
from django.contrib.auth.models import User

# Create your models here.
class Medication (models.Model):

    CURRENT = 'CUR'
    PAST = 'PAS'

    CATEGORY_CHOICES = [
        (CURRENT, 'Currently Taking'),
        (PAST, 'No Longer Taking'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    med_name = models.CharField(max_length=255, blank=True, null=True,)
    med_date = models.DateField(auto_now=False, blank=True, null=True,)
    prescriber = models.CharField(max_length=255, blank=True,)
    category = models.CharField(max_length=3, choices=CATEGORY_CHOICES, null=True, default='CUR')
    prescriber = models.CharField(max_length=255, blank=True)
    dosage = models.TextField(blank=True)
    reason = models.TextField(blank=True)
    label_img = models.ImageField(null=True, blank=True, upload_to='medications/')
