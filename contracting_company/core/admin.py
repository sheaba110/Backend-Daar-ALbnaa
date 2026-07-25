from django.contrib import admin
from .models import ConsultationRequest, Project, Service

admin.site.register(ConsultationRequest)
admin.site.register(Project)
admin.site.register(Service)