function MainController($scope) {
  $scope.name = 'Zenia';
}

angular
  .module('app')
  .controller('MainController', MainController);

var module = angular.module('app');
module.controller('MainController', MainController);