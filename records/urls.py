from django.urls import path
from .views import RecordListAPIView, RecordDetailAPIView

# app_name = 'records'

urlpatterns = [
    path('<int:pk>/', RecordDetailAPIView.as_view(), name= 'record_detail'),
    path('', RecordListAPIView.as_view(), name='record_list'),
]
