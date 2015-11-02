
var boardApplication = angular.module('boardApplication', ['ngRoute', 'boardServiceApplication']);

boardApplication.controller('boardListController', function ($scope, boardService) {

	boardService.getBoardList(function(data){
		$scope.boardList = data;
	});
});


boardApplication.controller('boardViewController', function ($scope, boardService) {

	$scope.boardView = function(){
		boardService.getBoardView(function(data){
			alert(data.contents);
			//$scope.board = data;
		}, {"_id":"56360dcd2a66c2980b7bd007"});
    };

});

boardApplication.controller('boardInsertController', function ($scope, boardService) {

	$scope.insertBoard = function(){
		boardService.insertBoard(function(data){
			location.href = "#boardList";
		}, angular.toJson($scope.board));
    };
});

boardApplication.config(function($routeProvider) {

	$routeProvider.when     ('/boardList',   {templateUrl:'/board/boardList.html'  });
	$routeProvider.when     ('/boardView',   {templateUrl:'/board/boardView.html'  });
	$routeProvider.when     ('/boardInsert', {templateUrl:'/board/boardInsert.html'});
	$routeProvider.otherwise('/boardList',   {templateUrl:'/board/boardList.html'  });
});
