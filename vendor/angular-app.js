var app = angular.module("myApp", []);

app.controller('titleController', ['$scope', function($scope) { 
  $scope.title = 'The professional profile of Tom Emmerson.'; 
}]);

app.controller('bodyController', ['$scope', function($scope) { 
  //code to control body copy goes here
}]);