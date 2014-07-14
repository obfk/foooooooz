angular.module('formExample', [])
  .controller('QueueController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.queue = function(user) {
      $scope.master = angular.copy(user);
    };
  }]);