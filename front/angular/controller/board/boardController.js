
var boardApplication = angular.module('boardApplication', ['ngRoute', 'boardServiceApplication']);

boardApplication.controller('boardListController', function ($scope, boardService) {

	boardService.getBoardList(function(data){
		$scope.boardList = data;
	});
});

boardApplication.controller('boardViewController', function ($scope, $routeParams, boardService) {

	$scope.board = {};
	boardService.getBoardView($routeParams, function(data){

		$scope.board._id      = data._id;
		$scope.board.name     = data.name;
		$scope.board.title    = data.title;
		$scope.board.contents = data.contents;
	});

	$scope.deleteBoard = function(){
		boardService.deleteBoard($scope.board, function(data){
			location.href = "#boardList";
		});
    };
});

boardApplication.controller('boardInsertController', function ($scope, boardService) {

	$scope.board = {};
	$scope.insertBoard = function(){
		boardService.insertBoard($scope.board, function(data){
			location.href = "#boardList";
		});
    };
});

boardApplication.controller('boardUpdateController', function ($scope, $routeParams, boardService) {

	$scope.board = {};
	boardService.getBoardView($routeParams, function(data){

		$scope.board._id      = data._id;
		$scope.board.name     = data.name;
		$scope.board.title    = data.title;
		$scope.board.contents = data.contents;
	});

	$scope.updateBoard = function(){
		boardService.updateBoard($scope.board, function(data){
			location.href = "#boardList";
		});
    };
});

boardApplication.config(function($routeProvider) {

	$routeProvider.when     ('/boardList',        {templateUrl:'/board/boardList.html',   controller:'boardListController'  });
	$routeProvider.when     ('/boardView/:_id',   {templateUrl:'/board/boardView.html',   controller:'boardViewController'  });
	$routeProvider.when     ('/boardInsert',      {templateUrl:'/board/boardInsert.html', controller:'boardInsertController'});
	$routeProvider.when     ('/boardUpdate/:_id', {templateUrl:'/board/boardUpdate.html', controller:'boardUpdateController'});
	$routeProvider.otherwise('/boardList',        {templateUrl:'/board/boardList.html',   controller:'boardListController'  });
});
