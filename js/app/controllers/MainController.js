function MainController($scope) {
	$scope.name = 'Billy!';
}

angular
	.module('app')
	.controller('MainController', MainController); 