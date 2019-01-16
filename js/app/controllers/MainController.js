function MainController($scope) {
	$scope.name = 'Kayla';
}

angular
	.module('app')
	.controller('MainController', MainController);
