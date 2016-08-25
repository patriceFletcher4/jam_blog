(function(){
  angular.module('jam')
        .controller('DailyController', DailyController);

  DailyController.$inject = ['$scope', 'WeatherService'];

  function DailyController($scope, WeatherService){
    $scope.dailyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
      'Partly Cloudy': 'There will be some clouds around in your area.'
    };
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.dailyData = value;

    });

  }
})();
