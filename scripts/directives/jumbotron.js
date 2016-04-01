angular.module('portfolioApp')
.directive('jumbotron', function () {
    return {
        templateUrl: 'templates/jumbotron.html',
        controller: 'titleController',
    }
})