angular.module('portfolioApp')
.directive('footer', function () {
    return {
        templateUrl: 'templates/footer.html',
        controller: 'footerCtrl',
    }
})