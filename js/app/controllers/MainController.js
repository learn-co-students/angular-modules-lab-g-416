function MainController($scope) {
  $scope.name = "Austin";
}

angular
  .module("app") // fetch the module
  .controller("MainController", MainController); // create the controller
