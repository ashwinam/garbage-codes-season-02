from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Jobs
from .permissions import JobsPermission, JobApplicationPermission
from .serializers import JobsSerializer, JobApplicationSerializer

class JobsViewSet(ModelViewSet):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer
    permission_classes = [JobsPermission]

    def get_serializer_class(self):
        if self.action == 'apply':
            return JobApplicationSerializer
        return super().get_serializer_class()

    @action(methods=['POST'], detail=True, permission_classes=[JobApplicationPermission])
    def apply(self, request):
        return self.create(request)