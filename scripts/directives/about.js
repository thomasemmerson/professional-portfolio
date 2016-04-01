angular.module('portfolioApp')
.directive('about', function () {
    return {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl',
    }
})