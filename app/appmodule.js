//Create a new module
/*Passing one argument retrieves an existing angular.Module, 
  whereas passing more than one argument
  creates a new angular.Module */
var app = angular.module("myApp", []);


/*
var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl: 'views/home.html'
  })
  .when('/photos/:id', {
    controller: 'PhotoController',
    templateUrl: 'views/photo.html'
  })
  	.otherwise({
    	redirectTo: '/'
  });
}); */