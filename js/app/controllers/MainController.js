function MainController($scope) {
  $scope.name = 'Mikez'
}

angular
  .module('app')
  .controller('MainController', MainController)
