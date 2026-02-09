var app = angular.module("externalApp", []);

app.controller("ExternalController", function($scope) {
    $scope.greeting = "Hello from external controller file!";
});
