// app.js
var app = angular.module('calculatorApp', []);
// app.js
app.controller('CalculatorController', function ($scope) {
    $scope.result = 0;
    $scope.num1 = 0;
    $scope.num2 = 0;

    $scope.add = function () {
        $scope.result = $scope.num1 + $scope.num2;
    };

    $scope.subtract = function () {
        $scope.result = $scope.num1 - $scope.num2;
    };

    $scope.multiply = function () {
        $scope.result = $scope.num1 * $scope.num2;
    };

    $scope.divide = function () {
        if ($scope.num2 !== 0) {
            $scope.result = $scope.num1 / $scope.num2;
        } else {
            alert("Cannot divide by zero!");
        }
    };
});
