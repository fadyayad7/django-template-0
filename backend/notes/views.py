from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NoteSerializer

# Create your views here.
from .models import Note

# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

