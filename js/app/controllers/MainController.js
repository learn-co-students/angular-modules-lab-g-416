function MainController($scope) {
  $scope.name = "Justin!"
}

angular
  .module('app')
  .controller('MainController', MainController)