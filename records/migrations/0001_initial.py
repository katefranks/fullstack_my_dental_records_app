# Generated by Django 3.2.5 on 2021-07-08 16:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Record',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appt_date', models.CharField(max_length=255)),
                ('category', models.CharField(choices=[('CLE', 'Cleaning'), ('RES', 'Restorative')], default='CLE', max_length=3, null=True)),
                ('xrays', models.BooleanField(default=False)),
                ('xray_type', models.CharField(blank=True, max_length=255, null=True)),
                ('provider_name', models.CharField(blank=True, max_length=255)),
                ('services', models.TextField(blank=True)),
                ('recommendations', models.TextField(blank=True)),
                ('appt_img', models.ImageField(null=True, upload_to='appointments/')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
