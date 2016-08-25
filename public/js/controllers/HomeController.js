
(function(){
  angular.module('jam')
        .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'WeatherService', '$geolocation', 'PostService', 'TodoService'];

  function HomeController($scope, WeatherService, $geolocation, PostService, TodoService){
    $scope.updateDaily = updateDaily;
    $scope.latitude = 29;
    $scope.longitude = -82;
    $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.latitude = position.coords.latitude;
            $scope.longitude = position.coords.longitude;
         });

    function updateDaily(latitude, longitude){
      WeatherService.getDailyData(latitude, longitude);
    }

  function getPosts(){
    PostService.getRandom(5)
              .then(function(response){
              $scope.posts = response.data.posts;
            })
              .catch(function(err){
              console.log(err);
            });

}
    $scope.message = 'Hey now! What is that sound?';
    $scope.messages = 'some more stuff';

  var todos;
    TodoService.readAll()
              .then(function(){
              todos = TodoService.todos
              console.log(todos);
            });


  }
}());
