function MainController($scope) {
    $scope.name = 'Liz';
}

angular 
    .module('app')
    .controller('MainController', MainController);