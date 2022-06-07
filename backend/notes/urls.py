from rest_framework import routers
from .views import TodoViewSet

router = routers.DefaultRouter()
router.register('', TodoViewSet, 'todos')

urlpatterns = router.urls
