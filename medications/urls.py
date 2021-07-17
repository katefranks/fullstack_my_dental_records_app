from django.urls import path
from .views import MedicationListAPIView, MedicationDetailAPIView, CategoryListAPIView

# app_name = 'medications'

urlpatterns = [

    path('category/', CategoryListAPIView.as_view()),
    path('<int:pk>/', MedicationDetailAPIView.as_view(), name= 'medication_detail'),
    path('', MedicationListAPIView.as_view(), name='medication_list'),
]
