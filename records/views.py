from rest_framework import generics
from .models import Record
from .serializers import RecordSerializer

class RecordListAPIView(generics.ListCreateAPIView):
    queryset = Record.objects.all()
    # queryset- (calls the stored information) = getting ALL of the objects from Record.
    serializer_class = RecordSerializer

class RecordDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
