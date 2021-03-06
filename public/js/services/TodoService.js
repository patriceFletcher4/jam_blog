
(function(){
  angular.module('jam')
          .factory('TodoService', TodoService);

          TodoService.$inject = ['$http'];

          function TodoService($http){
            //do not forget the slash !!!!!
            //
            var passphrase = 'Jesus is the center of my life I love him with all my heart and he loves me too';
            var config = {
              headers: {
                'passphrase': passphrase
              }
            };
            var baseUrl = 'https://hidden-woodland-60294.herokuapp.com/';
            var o = {
              create: createTodo, //function
              readAll: getAll, //function
              update: updateTodo, //function
              delete: deleteTodo, //function
              todos: [] //data
        };
    return o;


    function createTodo(desc){
      var info = {
          description: desc
    };
      return $http.post(baseUrl+'todos', info, config)
                  .then(function(response){
          console.log('create', response);
                  getAll();
  });
  }
    function getAll(){
      return $http.get(baseUrl + 'todos', config)
                  .then(function(response){
              o.todos = response.data;
  });
  }
  // var newTodo = {
  //   description: 'new description or at least the old one',
  //   isComplete: 'new complete status or at least the old one'
  // };
    function updateTodo(id, newTodo){
      return $http.put(baseUrl+'todos/'+id, newTodo, config)
                  .then(function(response){
            console.log('update',response);
                  getAll();
    });
    }
    function deleteTodo(id){
      return $http.delete(baseUrl+'todos/'+id, config)
                .then(function(response){
            console.log('delete', response);
                  getAll();
   });
  }


  }
})();
