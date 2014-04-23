angular
  .module('playDemo', [
    'ngRoute',
    'users'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'common/views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
