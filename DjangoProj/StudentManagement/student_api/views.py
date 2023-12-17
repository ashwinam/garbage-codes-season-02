from django.shortcuts import get_object_or_404

from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.decorators import api_view

from .models import StudentMainModel, StudentMarksMainModel, StudentMarksModel
from .serializers import StudentMarksMainSerializer, StudentSerializer, StudentMarksSerializer

class StudentListView(ListCreateAPIView):
    queryset = StudentMainModel.objects.all()
    serializer_class = StudentSerializer

    def post(self, request):
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

# @api_view(['GET', 'POST'])
# def student_list(request):
#     if request.method == 'GET':
#         queryset = StudentMainModel.objects.all()
#         serializer = StudentSerializer(queryset, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         branch = request.data.popitem()
#         student_data = request.data
#         student_obj = StudentMainModel(**student_data)
#         student_obj.save()
#         data = {}
#         data['student'] = student_obj.id # type: ignore
#         data['branch'] = branch[1]
#         serializer = StudentMarksMainSerializer(data=data) #type: ignore
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
class StudentMarksView(CreateAPIView, RetrieveAPIView):
    queryset = StudentMarksModel.objects.all()
    serializer_class = StudentMarksSerializer
    

    def perform_create(self, serializer):
        marks_instance = serializer.save()
        student_id = serializer.data.get('student') # type: ignore
        marks_main_obj = get_object_or_404(StudentMarksMainModel, student__id=student_id)
        marks_main_obj.marks.add(marks_instance)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def get(self, request, pk=None):
        if pk is not None:
            marks_main_obj = get_object_or_404(StudentMarksMainModel, student=pk)
            queryset = marks_main_obj.marks.all()
            print(queryset, '----')
            serializer = StudentMarksSerializer(queryset, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response({'message': "Pass the student id in address bar for getting student marks."}, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'POST'])
# def student_marks(request, pk=None):
#     if request.method == 'POST':
#         serializer = StudentMarksSerializer(data=request.data) # type: ignore
#         serializer.is_valid(raise_exception=True)
#         marks_instance = serializer.save()
#         student_id = serializer.data.get('student') # type: ignore
#         marks_main_obj = get_object_or_404(StudentMarksMainModel, student__id=student_id)
#         marks_main_obj.marks.add(marks_instance)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     elif request.method == 'GET':
#         if pk is not None:
#             marks_main_obj = get_object_or_404(StudentMarksMainModel, student=pk)
#             queryset = marks_main_obj.marks.all()
#             print(queryset, '----')
#             serializer = StudentMarksSerializer(queryset, many=True)
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response({'message': "Pass the student id in address bar for getting student marks."}, status=status.HTTP_400_BAD_REQUEST)