function MainController($scope) {
  $scope.name = 'Charlotte';
}

angular
  .module('app')
  .controller('MainController', MainController);
