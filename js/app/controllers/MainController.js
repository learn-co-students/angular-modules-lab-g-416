function MainController(){
    $scope.name = 'Santiago';
}

angular
    .module('app')
    .controller('MainController', MainController)