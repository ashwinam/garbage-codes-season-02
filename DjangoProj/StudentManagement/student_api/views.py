from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import StudentMainModel
from .serializers import StudentSerializer


@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        queryset = StudentMainModel.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)