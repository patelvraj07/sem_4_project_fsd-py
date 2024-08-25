from django.urls import path
# from .views import HelloWorldView
from . import views
urlpatterns=[
    # path('api/sample/',HelloWorldView.as_view()),
    path('',views.home,name='home'),
    path('api/featured-cars/',views.featured_cars,name='featured-cars'),
    path('api/popular-cars/',views.popular_cars,name='popular-cars'),
    path('api/upcoming-cars/',views.upcoming_cars,name='upcoming-cars'),
    
]