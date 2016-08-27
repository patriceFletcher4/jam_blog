
(function(){
  angular.module('jam')
        .controller('HourlyController', HourlyController);

  HourlyController.$inject = ['$scope', 'WeatherService', '$geolocation'];

  function HourlyController($scope, WeatherService, $geolocation){
    $scope.hourlyData = WeatherService.weather;
    $scope.summaryLookup = {
      'Drizzle': 'There will be some drizzle',
      'Partly Cloudy': 'There will be some clouds around in your area.'
    };
    $scope.$watch(function(){
      return WeatherService.weather;
    }, function(value){
      $scope.hourlyData = value;
    });

    $scope.$watch(function(){
      return $geolocation.formattedAddress;
    },function(value){
      console.log("value: ", value);
      $scope.formattedAddress = value;
    });
  }
})();
