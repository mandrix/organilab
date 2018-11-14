# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-11-02 07:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('printOrderManager', '0013_auto_20181101_2118'),
    ]

    operations = [
        migrations.AddField(
            model_name='schedule',
            name='state',
            field=models.TextField(default='Enabled', max_length=255, verbose_name='State'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='closeTime',
            field=models.TextField(max_length=255, verbose_name='Close Time'),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='startTime',
            field=models.TextField(max_length=255, verbose_name='Start Time'),
        ),
    ]
