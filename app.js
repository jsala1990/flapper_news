angular.module('flapperNews', [])
.controller('MainCtrl', ['$scope', function($scope) {
    $scope.posts = [
        {title: 'posts 1', upvotes: 5},
        {title: 'posts 2', upvotes: 4},
        {title: 'posts 3', upvotes: 3},
        {title: 'posts 4', upvotes: 2},
        {title: 'posts 5', upvotes: 1}
    ];

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };

    $scope.addPost = function() {
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({title: $scope.title, upvotes: 0});    
        $scope.title = '';
    };
}]);
