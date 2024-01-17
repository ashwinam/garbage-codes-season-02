from rest_framework import permissions

class JobsPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if view.action in ['list', 'retrieve']:
            return True
        if view.action == 'create':
            return request.user.is_authenticated and request.user.user_type == 'EMPLOYER'
        return super().has_permission(request, view)
    
    def has_object_permission(self, request, view, obj):
        if view.action in ['update', 'partial_update', 'destroy']:
            return obj.user == request.user
        return super().has_object_permission(request, view, obj)