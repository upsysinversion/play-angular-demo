
  'use strict';
    var user;
    user = angular.module('users', []);
    user.config([
      '$routeProvider', function($routeProvider) {
        $routeProvider.when('/users', {
          templateUrl: '/users/views/main-user.html'
        });
        
        return $routeProvider.otherwise({
          redirectTo: '/users'
        });
      }
    ]);




