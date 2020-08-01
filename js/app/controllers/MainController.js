function MainController($scope){
    $scope.name = "paul";
}

angular
	.module('app')
	.controller('MainController', MainController);