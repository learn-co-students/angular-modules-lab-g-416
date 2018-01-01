function MainController($scope) {
  $scope.name = 'Pam';
}

angular
  .module('app')
  .controller('MainController', MainController);
