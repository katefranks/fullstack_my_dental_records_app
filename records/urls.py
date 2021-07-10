from django.urls import path
from .views import RecordListAPIView, RecordDetailAPIView, CategoryListAPIView

# app_name = 'records'

urlpatterns = [
    path('category/', CategoryListAPIView.as_view()),
    path('<int:pk>/', RecordDetailAPIView.as_view(), name= 'record_detail'),
    path('', RecordListAPIView.as_view(), name='record_list'),
]
