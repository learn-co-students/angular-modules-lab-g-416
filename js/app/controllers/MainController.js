function MainController($scope) {
  $scope.name = 'Marina';
}

angular
  ,module('app')
  .controller('MainController', MainController);
