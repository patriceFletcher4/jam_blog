
(function() {
  angular.module('jam')
        .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'html/views/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'html/views/login.html',
        controller: 'LoginController'
      })
      .when('/signup', {
        templateUrl: 'html/views/signup.html',
        controller: 'SignupController'
      })
      .when('/post/:postId', {
        templateUrl: 'html/views/post.html',
        controller: 'PostController'
      })
      .when('/create', {
        templateUrl: 'html/views/post-create.html',
        controller: 'PostController'
      })
      .when('/edit/:postId', {
        templateUrl: 'html/views/post-edit.html',
        controller: 'PostController'

      })
      .when('/daily', {
        templateUrl: 'html/views/daily.html',
        controller: 'DailyController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
}());
