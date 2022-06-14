from rest_framework import routers
from .views import ProductViewSet

router = routers.DefaultRouter()
router.register('product', ProductViewSet, 'amazon products')

urlpatterns = router.urls
