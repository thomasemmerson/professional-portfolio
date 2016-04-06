'use strict';

angular.module('portfolioApp')

.controller('portfolioApp', function($scope) {

})

.controller('titleController', function($scope) {
    $scope.title = 'The portfolio of Tom Emmerson.';
})

.controller('mainCtrl', function($scope, dataService) {

    dataService.getItems(function(response) {
        $scope.items = response.data;
    });

})

/*.controller('footerCtrl', function($scope, dataService) {

})

.controller('aboutCtrl', function($scope, dataService) {


})*/

.controller('DisplayController', function($scope) {

    $scope.component = "flash";

    $scope.setComponent = function(val)
    {
        $scope.component =val;
    }
})