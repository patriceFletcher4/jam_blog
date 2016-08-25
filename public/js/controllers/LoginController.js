(function() {
  angular.module('jam')
          .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', 'AuthService', '$location'];

  function LoginController($scope, AuthService, $location){
    $scope.login = login;

    function login(user){
      AuthService.login(user)
            .then(function(){
              $location.path('/');
            })
            .catch(function(err){
              console.log(err);
            });
    }
  }
}());
