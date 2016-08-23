(function(){
  angular.module('ngBlog', 'ngWeather', ngtodos)
        .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'WeatherService', 'TodoService'];

  function SimpleController($scope, UserService, WeatherService, TodoService){
    $scope.message = 'Hello'
    WeatherService.getDailyData(29, -82);

    UserService.getAllUsers()
              .then(function(response){
                console.log(response);
              });
    var userObj = {
      firstName: 'Pat',
      lastName: 'Nicky'
      email: 'patnicky@dev.org'
    };
    UserService.createUser(userObj)
              .then(function(response){
                console.log(response);
              });
    var todos;
    TodoService.readAll()
    .then(function(){
      todos = TodoService.todos
      console.log(todos);
    });
  }
})();
