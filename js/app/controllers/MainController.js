function MainController($scope) {
  $scope.name = 'Antley';
}

angular
  .module('app')
  .controller('MainController', MainController);