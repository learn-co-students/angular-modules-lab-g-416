function MainController($scope) {
	$scope.name = 'Richard';
}



angular
  .module('app')
  .controller('MainController', MainController);
