from django.http import HttpResponse
from django.shortcuts import render

def product_list(request):
    return HttpResponse('ok')
