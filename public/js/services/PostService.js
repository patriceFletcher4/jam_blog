
(function() {

  angular.module('jam')
        .factory('PostService', PostService);

  PostService.$inject = ['$http'];

  function PostService($http){
    var baseUrl = 'https://hidden-woodland-60294.herokuapp.com/';

    var service = {
      getAllPosts: getAllPosts,
      createPost: createPost,
      getOnePost: getOnePost,
      updatePost: updatePost,
      deletePost: deletePost,
      getRandom: getRandom,
      getRecent: getRecent
    };
    return service;

    function getRandom(number){
      return $http.get(baseUrl+'random/'+number);
    }
    function getRecent(number){
      return $http.get(baseUrl+'recent/'+number);
    }
    function getAllPosts(){
      return $http.get(baseUrl);
    }
    function createPost(postObj){
      return $http.post(baseUrl, postObj);
    }
    function getOnePost(postId){
      return $http.get(baseUrl + postId);
    }
    function updatePost(postId, updatePostObj){
      return $http.put(baseUrl + postId, updatePostObj);
    }
    function deletePost(postId){
      return $http.delete(baseUrl + postId);
    }
  }


}());
