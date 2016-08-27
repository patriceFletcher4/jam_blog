
(function() {
  angular.module('jam')
        .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', '$window'];

  function AuthService($http, $window){
    var loginUrl = 'https://hidden-woodland-60294.herokuapp.com/';
    var passphrase = 'Jesus is the center of my life I love him with all my heart and he loves me too';
    var config = {
      headers: {
        'passphrase': passphrase
      }
    };
    var service = {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      login: login,
      logout: logout
    };
    return service;
    function currentUser(){
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          email: payload.email,
          id: payload._id,
          firstName: payload.firstName,
          lastName: payload.lastName
        };
      }
    }
    function saveToken(token){
      $window.localStorage['mean-token'] = token;
      // console.log($window.localStorage);
    }
    function getToken(){
      return $window.localStorage['mean-token'];
    }
    function isLoggedIn(){
      var token = getToken();
      var payload;
      if(token){
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > new Date().getDate();
      } else {
        return false;
      }
    }

    function login(user){
      return $http.post(loginUrl, user, config)
                  .then(function(response){
                    saveToken(response.data.token);
                    return response.data;
                  })
                  .catch(function(err){
                    console.log(err);
                  });
    }
    function logout(){

      $window.localStorage.removeItem('mean-token');
    }
  }

}());
