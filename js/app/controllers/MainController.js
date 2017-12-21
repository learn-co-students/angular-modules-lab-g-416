function MainController($scope) {
  $scope.name = "Mar"
}

angular
  .module('app')
  .controller('MainController', MainController)
