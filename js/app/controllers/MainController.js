function MainController($scope) {
  $scope.name = 'Paul';
}

angular
  .module('app')
  .controller('MainController', MainController);
