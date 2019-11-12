function MainController($scope) {
  $scope.name = "Lucy"
}
let module = angular.module('app')
module.controller('MainController', MainController)