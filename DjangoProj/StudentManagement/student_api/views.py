from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


from .models import StudentMainModel, StudentMarksMainModel
from .serializers import StudentMarksMainSerializer, StudentSerializer, StudentMarksSerializer


@api_view(['GET', 'POST'])
def student_list(request):
    if request.method == 'GET':
        queryset = StudentMainModel.objects.all()
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        branch = request.data.popitem()
        student_data = request.data
        student_obj = StudentMainModel(**student_data)
        student_obj.save()
        data = {}
        data['student'] = student_obj.id # type: ignore
        data['branch'] = branch[1]
        serializer = StudentMarksMainSerializer(data=data) #type: ignore
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def student_marks(request, pk=None):
    if request.method == 'POST':
        serializer = StudentMarksSerializer(data=request.data) # type: ignore
        serializer.is_valid(raise_exception=True)
        serializer.save()
        student_id = serializer.data.get('student')
        marks_main_obj = get_object_or_404(StudentMarksMainModel, student__id=student_id)
        marks_main_obj.marks.add(student_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'GET':
        if pk is not None:
            marks_main_obj = get_object_or_404(StudentMarksMainModel, student=pk)
            queryset = marks_main_obj.marks.all()
            serializer = StudentMarksSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'message': "Pass the student id in address bar for getting student marks."}, status=status.HTTP_400_BAD_REQUEST)