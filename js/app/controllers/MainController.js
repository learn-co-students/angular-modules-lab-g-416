function MainController($scope) {
  $scope.name = 'Victoria';
}

angular
  .module('app')
  .controller('MainController', MainController);