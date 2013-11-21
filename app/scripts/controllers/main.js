'use strict';

angular.module('ffaApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/stories').success(function(stories) {
    console.log(stories);
      $scope.Stories = stories;
    });
  });
