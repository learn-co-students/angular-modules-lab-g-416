function MainController ($scope){
    $scope.name = 'Caitlin';

}

var module=angular.module("app");
module.controller("MainController", MainController);