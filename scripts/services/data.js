'use strict';

angular.module('portfolioApp')

.service('dataService', function($http) {

    this.getItems = function(callback) {
        $http.get('http://tomemmerson.website/mock/items.js').then(callback)
    };

});