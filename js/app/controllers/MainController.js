function MainController($scope) {
  $scope.name = 'Zachary';
}

angular
  .module('app')
  .controller('MainController', MainController);