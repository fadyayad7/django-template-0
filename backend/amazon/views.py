from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer

# Create your views here.
from .models import Product

# Create your views here.


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

