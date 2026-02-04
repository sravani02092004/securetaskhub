
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # You can add extra fields if needed
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.username
