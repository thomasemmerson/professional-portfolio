'use strict';

angular.module('portfolioApp')

.controller('portfolioApp', function($scope) {

})

.controller('mainCtrl', function($scope, dataService) {

    dataService.getItems(function(response) {
        $scope.items = response.data;
    });

})

