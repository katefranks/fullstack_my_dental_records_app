# Generated by Django 3.2.5 on 2021-07-20 00:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medications', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='medication',
            name='med_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]