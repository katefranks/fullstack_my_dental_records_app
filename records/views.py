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

class RecordDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Record.objects.all()
    # going to have to over ride to only return the records that belong to the logged in user.
    #override the get query set method

    # Record.objects.filter(user=self.request.user)

    # need to put the above inside a "get query set method"

    serializer_class = RecordSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CategoryListAPIView(generics.ListCreateAPIView):
    serializer_class = RecordSerializer

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Record.objects.filter(category=selection)

class XrayListAPIView(generics.ListCreateAPIView):
    serializer_class = RecordSerializer

    def get_queryset(self):
        selection = self.request.query_params['xrays']
        return Record.objects.filter(xrays=selection)
