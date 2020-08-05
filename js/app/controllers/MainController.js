function MainController($scope) {
  $scope.name = "Kelley"
}

angular
  .module('app')
  .controller('MainController', MainController)