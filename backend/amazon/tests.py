from unicodedata import name
from django.test import TestCase
from .models import Product


# Create your tests here.
class TestAmazon(TestCase):
    def test_can_get_notes(self):
        product = Product(name="iphone15", description="desc", price=100.00)
        product.save()
        product = Product(name="macbook m4 chip", description="desc", price=100.00)
        product.save()
        self.assertEquals(Product.objects.all().count(), 2)
        self.assertEquals(Product.objects.all().first().name, 'iphone15')


