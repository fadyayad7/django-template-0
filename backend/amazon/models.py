from django.db import models

# Create your models here.
class Product(models.Model):
    def __str__(self):
        return str(self.name)

    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    price = models.FloatField()
