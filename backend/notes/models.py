from sqlite3 import Date
from django.db import models
from datetime import datetime 

# Create your models here.
class Note(models.Model):
    def __str__(self):
        return str(self.content)


    content = models.CharField(max_length=100)
    date = models.DateField(default=datetime.now, blank=True)
