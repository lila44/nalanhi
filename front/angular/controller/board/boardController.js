
var boardApplication = angular.module('boardApplication', ['ngRoute']);

boardApplication.controller('boardListController', function ($scope, $http) {
	var stream = $http({
        method : 'get',
        url    : '/board/boardList',
		params : null
	});
	stream.success(function(data) {
		$scope.boardList = data;
	});
	stream.error(function(e) {
		console.log('Error: ' + e);
	});
});

boardApplication.controller('boardViewController', function ($scope, $http) {
	alert('boardViewController');
});

boardApplication.controller('boardInsertController', function ($scope, $http) {
	$scope.insertBoard = function(){
		var stream = $http({
	        method   : 'post',
			dataType : 'json',
	        url      : '/board/InsertBoard',
			params   : $scope.form1
		});
		stream.success(function(data) {
			alert('ok');
		});
		stream.error(function(e) {
			console.log('Error: ' + e);
		});
    };
});

boardApplication.config(function($routeProvider) {

	$routeProvider.when     ('/boardList',   {templateUrl:'/board/boardList.html',   controller:'boardListController'  });
	$routeProvider.when     ('/boardView',   {templateUrl:'/board/boardView.html',   controller:'boardViewController'  });
	$routeProvider.when     ('/boardInsert', {templateUrl:'/board/boardInsert.html'                                    });
	$routeProvider.otherwise('/boardList',   {templateUrl:'/board/boardList.html',   controller:'boardListController'  });
});
