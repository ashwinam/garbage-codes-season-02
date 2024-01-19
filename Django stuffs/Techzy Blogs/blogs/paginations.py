from rest_framework.pagination import PageNumberPagination


class PaginationConf(PageNumberPagination):
    page_size = 2