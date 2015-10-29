
var postsApplication = angular.module('postsApplication', ['ngRoute']);

postsApplication.controller('postsController', function ($scope, $http, postsService) {

	$scope.postsService = postsService;

	$scope.reverseName = function(){
        alert(1);
    };
});

postsApplication.controller('testRouteController', function ($scope, $http) {
	var stream = $http({
        method : 'GET',
        url    : '/posts',
		params : null
	});
	stream.success(function(data) {
		$scope.postList = data;
	});
	stream.error(function(e) {
		console.log('Error: ' + e);
	});
});


postsApplication.service('postsService', function() {

	var thisIsPrivate = "private data";
	this.variable     = "public data";
	this.getPrivate   = function() {
		return thisIsPrivate;
	};
});

postsApplication.directive("postsDirective", function(){
    return {
        restrict : "E", // E:element, A:attribute, C:class
        scope    : false,
        //templateUrl : "/angular/view/test/testDirectve.html"
		templateUrl : function(element, attribute){
			return "/angular/view/test/testDirectve-" + attribute.type + ".html";
		}
    };
});

postsApplication.config(function($routeProvider) {

	$routeProvider.when     ('/testDirectve-one', {templateUrl:'/angular/view/test/testDirectve-one.html'});
	$routeProvider.when     ('/testDirectve-two', {templateUrl:'/angular/view/test/testDirectve-two.html', controller:'testRouteController'});
	$routeProvider.otherwise('/testDirectve-one', {templateUrl:'/angular/view/test/testDirectve-one.html'});
});
