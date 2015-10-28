angular.module('posts', []);
function mainController($scope, $http) {
	$scope.postForm = {};

	// when landing on the page, get all todos and show them
	$http.get('/posts')
		.success(function(data) {
			$scope.postList = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});


    // when submitting the add form, send the text to the node API
	$scope.createPost = function() {
		$http.post('/posts', $scope.postForm)
			.success(function(data) {
				$scope.postForm = {}; // clear the form so our user is ready to enter another
				$scope.todos    = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}
