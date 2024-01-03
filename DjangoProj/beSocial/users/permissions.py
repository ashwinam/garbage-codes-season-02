from rest_framework import permissions

class CurrentUser(permissions.IsAuthenticated):
    def has_object_permission(self, request, view, obj):
        return obj.pk == request.user.profiles.pk