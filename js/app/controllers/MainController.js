function MainController($scope) {
    $scope.name = 'Trevor!';
  }

angular
    .module('app')
    .controller('MainController', MainController)