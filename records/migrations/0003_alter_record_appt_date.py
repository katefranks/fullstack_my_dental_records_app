# Generated by Django 3.2.5 on 2021-07-10 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('records', '0002_alter_record_appt_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='appt_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
