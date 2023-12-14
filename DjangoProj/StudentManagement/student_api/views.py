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
def student_marks(request):
    if request.method == 'POST':
        serializer = StudentMarksSerializer(data=request.data) # type: ignore
        serializer.is_valid(raise_exception=True)
        serializer.save()
        student_id = serializer.data.get('student')
        marks_main_obj = get_object_or_404(StudentMarksMainModel, student=student_id)
        marks_main_obj.marks.add(student_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({'message': "Only Post Method Allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)