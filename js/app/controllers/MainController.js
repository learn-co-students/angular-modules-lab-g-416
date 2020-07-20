function MainController($scope) {
	$scope.name = 'Kelly';
}

angular
	.module('app')
	.controller('MainController', MainController);