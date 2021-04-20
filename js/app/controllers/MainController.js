function MainController($scope){
    $scope.name = 'Dasha';
}

angular 
    .module('app')
    .controller('MainController', MainController)