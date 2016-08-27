

(function() {
  angular.module('jam')
        .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var baseUrl = 'https://hidden-woodland-60294.herokuapp.com/users/';
    var signUpUrl = 'https://hidden-woodland-60294.herokuapp.com/signup/';
    var loginUpUrl = 'https://hidden-woodland-60294.herokuapp.com/login/';
    var passphrase = 'Jesus is the center of my life I love him with all my heart and he loves me too';
    var config = {
      headers: {
        'passphrase': passphrase
      }
    };
    var service = {
      getAllUsers: getAllUsers,
      signUp: signUp,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    };
    return service;

    function getAllUsers(){
      return $http.get(baseUrl);
    }
    function signUp(userObj){
      return $http.post(signUpUrl, userObj, config);
    }
    function getOneUser(userId){
      return $http.get(baseUrl + userId);
    }
    function updateUser(userId, updateInfo){
      return $http.update(baseUrl, updateInfo);
    }
    function deleteUser(userId){
      return $http.delete(baseUrl + userId);
    }
  }
})();
