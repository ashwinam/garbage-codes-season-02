from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status

from .models import TaskModels
from .serializers import TaskSerializer



class TaskListView(ListCreateAPIView):
    queryset = TaskModels.objects.all()
    serializer_class = TaskSerializer

class TaskDetailView(RetrieveUpdateDestroyAPIView):
    queryset = TaskModels.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'id'

    # def get(self, request, id=None):
    #     if id is not None:
    #         task = get_object_or_404(TaskModels, pk=id)
    #         serializer = (task)
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     queryset = TaskModels.objects.all()
    #     serializer = TaskSerializer(queryset, many=True)
    #     return Response(serializer.data)
    
    # def post(self, request):
    #     serializer = TaskSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    # def put(self, request, id):
    #     try:
    #         task = get_object_or_404(TaskModels, pk=id)
    #         serializer = TaskSerializer(task, data=request.data)
    #         serializer.is_valid(raise_exception=True)
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     except Exception as e:
    #         return Response(status=status.HTTP_404_NOT_FOUND)
    
    # def delete(self, request, id):
    #     task = get_object_or_404(TaskModels, pk=id)
    #     task.delete()
    #     return Response({'message': 'Task deleted successfully.'}, status=status.HTTP_200_OK)