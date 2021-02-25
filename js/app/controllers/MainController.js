function MainController($scope) {
    $scope.name = 'Juan!';
}

angular
    .module('app')
    .controller('MainController', MainController);