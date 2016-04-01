'use strict';

angular.module('portfolioApp')

.service('dataService', function($http) {

    this.getItems = function(callback) {
        $http.get('mock/items.js').then(callback)
    };

});
