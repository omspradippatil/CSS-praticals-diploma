var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.message = "Hello from External Controller!";
    $scope.getFullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
