from rest_framework import generics
from .models import Medication
from .serializers import MedicationSerializer
# from .permissions import IsAuthOrReadOnly
# from django.shortcuts import get_object_or_404

class MedicationListAPIView(generics.ListCreateAPIView):
    queryset = Medication.objects.all()
    # queryset- (calls the stored information) = getting ALL of the objects from Medication.
    serializer_class = MedicationSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        selection = self.request.user
        return Medication.objects.filter(user=self.request.user).order_by('med_date')

class MedicationDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MedicationSerializer

    def get_queryset(self):
        selection = self.request.user
        return Medication.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user).order_by('med_date')

class CategoryListAPIView(generics.ListCreateAPIView):
    serializer_class = MedicationSerializer

    def get_queryset(self):
        selection = self.request.query_params['category']
        return Medication.objects.filter(category=selection, user=self.request.user).order_by('med_date')
