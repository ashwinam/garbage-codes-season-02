from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view()
def student_list(request):
    return Response({'message': 'Coming Soon!'}, status=status.HTTP_200_OK)