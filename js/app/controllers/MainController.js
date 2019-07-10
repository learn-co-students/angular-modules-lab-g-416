function MainController($scope) {
  $scope.name = "World";
}
 
angular
  .module('app') // fetch the module
  .controller('MainController', MainController); // create the controller