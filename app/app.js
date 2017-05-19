'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.about',
  'myApp.projects',
  'myApp.contact',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/about'});
}]);
