function MainController($scope) {
  $scope.name = 'Crapper';
}

angular
  .module('app')
  .controller('MainController', MainController);