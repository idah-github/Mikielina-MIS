from email.mime import application
from email.policy import HTTP
from multiprocessing import context
from django import views
from django.shortcuts import render
from django.contrib.auth.models import User, Group
from requests import delete
from rest_framework import viewsets, permissions,status, generics, views
from .serializers import *
from .models import *
# from rest_framework import status
from .models import CustomUser as User
from django.http import HttpResponse, JsonResponse, Http404
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes, authentication_classes
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        print(data)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['first_name'],
            last_name=data['last_name'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)

    data = request.data
    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])

    user.save()

    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([])
def profile(request):

    # serializer=ProfileSerializer(data=request.data)
    serializer = ProfileSerializer(data=request.data, instance=request.user)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        serializer = ProfileSerializer(instance= request.user) 

    context ={
        'serializer' :serializer
    }
    return Response(serializer.data, context)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    # serializer = UserSerializer( user, many=False)
    serializer = ProfileSerializer(user, many=False)
    # context = {
        # 'serializer': serializer,
        # 'p_serializer':p_serializer
    # }

    return Response(serializer.data, context)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(id=pk)
    data = request.data

    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False,instance=request.user)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')


class ApplicationListView(views.APIView):
    permission_classes = ([])
    authentication_classes = ([])

    def get(self, request, format=None):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)

    def post(self,request,format=None):
        serializer = ApplicationSerializer(data=request.data)

        print(serializer.is_valid())
        print(request.data)
        # serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

class ApplicationDetailView(views.APIView):
    permission_classes = ([])
    def get_object(self, pk):
        try:
            return Application.objects.get(pk=pk)
        except Application.DoesNotExist:
            raise Http404

    def get(self, request,pk,format=None):
        application =self.get_object(pk)
        serializer =ApplicationSerializer(application)
        return Response (serializer.data)
    
    def put(self, request,pk, format=None):
        application =self.get_object(pk)
        serializer =ApplicationSerializer(application, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response (serializer.errors, status.HTTP_400_BAD_REQUEST)

    def delete(self, request,pk, format=None):
        application =self.get_object(pk)
        application.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



