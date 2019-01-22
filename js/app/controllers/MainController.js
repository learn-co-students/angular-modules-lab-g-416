function MainController($scope) {
  $scope.name = 'Nate';
}

angular
  .module('app')
  .controller('MainController', MainController); 