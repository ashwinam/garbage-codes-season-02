from rest_framework.viewsets import ModelViewSet

from .models import Jobs
from .serializers import JobsSerializer

class JobsViewSet(ModelViewSet):
    queryet = Jobs.objects.all()
    serializer_class = JobsSerializer