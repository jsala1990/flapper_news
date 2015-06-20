angular.module('flapperNews', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
            $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
    })
    .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
    });

    $urlRouterProvider.otherwise('home');
}])
.factory('postsService', [function() {
    var data = {
        posts: []
    };
    return data;
}])
.controller('MainCtrl', ['$scope', 'postsService', function($scope, postsService) {
    $scope.posts = postsService.posts;

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };

    $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                {author: 'Jay', body: 'Crappy post!', upvotes: 0},
                {author: 'Zeus', body: 'Crappy post!', upvotes: 0},
            ]
        });

        $scope.title = '';
        $scope.link = '';
        
    };
}])
.controller('PostsCtrl', ['$scope', '$stateParams', 'postsService', 
        function($scope, $stateParams, postsService) {
            $scope.post = postsService.posts[$stateParams.id];

            $scope.addComment = function() {
                if($scope.body === '') {return;}
                if(!$scope.post) {return;}
                $scope.post.comments.push({
                    body: $scope.body,
                    author: 'user',
                    upvotes: 0
                });

                $scope.body = '';
            };
}]);
