from rest_framework.viewsets import ModelViewSet

from .models import Jobs
from .serializers import JobsSerializer

class JobsViewSet(ModelViewSet):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer