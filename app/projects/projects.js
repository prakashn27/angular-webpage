'use strict';

angular.module('myApp.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope','$http', function($scope,$http) {
	var COURSES = ['ud899', 'ud898', 'ud356']
	$http.get("https://www.udacity.com/public-api/v0/courses")
	.then(response => {
			$scope.courses = response.data.courses.filter(course => COURSES.indexOf(course.key) >= 0); 
			console.log($scope.courses);
		})
	.catch(err => console.log(`err is ${err}`));
}]);