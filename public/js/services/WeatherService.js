(function(){
  angular.module('jam')
        .factory('WeatherService', WeatherService);

  WeatherService.$inject = ['$http'];


    function WeatherService($http){
    var passphrase = 'Jesus is the center of my life I love him with all my heart and he loves me too';
    var baseUrl = 'https://hidden-woodland-60294.herokuapp.com/';
    var config = {
      headers: {
        'passphrase': passphrase
      }
    };
    var service = {
      getHourlyData: getHourlyData,
      getMinutelyData: getMinutelyData,
      getDailyData: getDailyData,
      weather: {}
    };
    return service;

    function getHourlyData(lat, lon){
      var url = baseUrl + 'forecast/hourly/'+ lat + ',' +lon;
      return $http.get(url, config)
            .then(function(response){
              console.log(response);
            service.weather = response.data;
            console.log(service.weather);
            });
    }
    function getMinutelyData(lat, lon){
      var url = baseUrl + 'forecast/minutely/'+ lat + ',' +lon;
      return $http.get(url, config)
                  .then(function(response){
                  service.weather = response.data;
                  console.log(service.weather);
                });
    }
    function getDailyData(lat, lon){
      var url = baseUrl + 'forecast/daily/'+lat + ',' +lon;
      return $http.get(url, config)
                  .then(function(response){
                  service.weather = response.data;
                  console.log(service.weather);
                });
    }
    }

})();
