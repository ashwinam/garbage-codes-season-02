from rest_framework.viewsets import ModelViewSet

from .models import Jobs
from .permissions import JobsPermission
from .serializers import JobsSerializer

class JobsViewSet(ModelViewSet):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer
    permission_classes = [JobsPermission]