from django.urls import path
from .views import RecordListAPIView, RecordDetailAPIView, CategoryListAPIView, XrayListAPIView

# app_name = 'records'

urlpatterns = [
    path('xrays/', XrayListAPIView.as_view()),
    path('category/', CategoryListAPIView.as_view()),
    path('<int:pk>/', RecordDetailAPIView.as_view(), name= 'record_detail'),
    path('', RecordListAPIView.as_view(), name='record_list'),
]
