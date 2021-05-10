function MainController($scope) {
	$scope.name = 'Bryce';
}

angular
	.module('app')
	.controller('MainController', MainController);
