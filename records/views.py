from rest_framework import generics
from .models import Record
from .serializers import RecordSerializer
# from .permissions import IsAuthOrReadOnly
# from django.shortcuts import get_object_or_404

class RecordListAPIView(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    # queryset- (calls the stored information) = getting ALL of the objects from Record.
    serializer_class = RecordSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        selection = self.request.user
        return Record.objects.filter(user=self.request.user).order_by('-appt_date')

class RecordDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RecordSerializer

    def get_queryset(self):
        selection = self.request.user
        return Record.objects.filter(user=self.request.user).order_by('-appt_date')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CategoryListAPIView(generics.ListCreateAPIView):
    serializer_class = RecordSerializer

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Record.objects.filter(category=selection, user=self.request.user).order_by('-appt_date')


class XrayListAPIView(generics.ListCreateAPIView):
    serializer_class = RecordSerializer

    def get_queryset(self):
        selection = self.request.query_params['xrays']
        return Record.objects.filter(xrays=selection, user=self.request.user).order_by('-appt_date')
