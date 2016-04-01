angular.module('portfolioApp')
.directive('portfolio', function () {
    return {
        templateUrl: 'templates/portfolio.html',
        controller: 'mainCtrl',
    }
})