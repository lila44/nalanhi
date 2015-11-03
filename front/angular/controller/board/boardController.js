/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 컨트롤러
*/
var boardApplication = angular.module('boardApplication', ['ngRoute', 'initInterceptor', 'boardServiceApplication']);

boardApplication.controller('boardListController', function ($scope, boardService) {

	boardService.getBoardList(function(data){
		$scope.boardList = data;
	});
});

boardApplication.controller('boardViewController', function ($scope, $routeParams, $location, boardService) {

	$scope.board = {};
	boardService.getBoardView($routeParams, function(data){

		$scope.board._id      = data._id;
		$scope.board.name     = data.name;
		$scope.board.title    = data.title;
		$scope.board.contents = data.contents;
	});

	$scope.deleteBoard = function(){
		boardService.deleteBoard($scope.board, function(data){
			$location.url("/boardList");
		});
    };
});

boardApplication.controller('boardInsertController', function ($scope, $location, boardService) {

	$scope.board = {};
	$scope.insertBoard = function(){
		boardService.insertBoard($scope.board, function(data){
			$location.url("/boardList");
		});
    };
});

boardApplication.controller('boardUpdateController', function ($scope, $routeParams, $location, boardService) {

	$scope.board = {};
	boardService.getBoardView($routeParams, function(data){

		$scope.board._id      = data._id;
		$scope.board.name     = data.name;
		$scope.board.title    = data.title;
		$scope.board.contents = data.contents;
	});

	$scope.updateBoard = function(){
		boardService.updateBoard($scope.board, function(data){
			$location.url("/boardList");
		});
    };
});

boardApplication.directive("directiveLayout", function(){
    return {
        restrict    : "E", // E:element, A:attribute, C:class
        scope       : false,
		templateUrl : function(element, attribute){
			return "/common/" + attribute.type + ".html";
		}
    };
});

boardApplication.config(function($routeProvider) {

	$routeProvider.when     ('/boardList',        {templateUrl:'/board/boardList.html',   controller:'boardListController'  });
	$routeProvider.when     ('/boardView/:_id',   {templateUrl:'/board/boardView.html',   controller:'boardViewController'  });
	$routeProvider.when     ('/boardInsert',      {templateUrl:'/board/boardInsert.html', controller:'boardInsertController'});
	$routeProvider.when     ('/boardUpdate/:_id', {templateUrl:'/board/boardUpdate.html', controller:'boardUpdateController'});
	$routeProvider.otherwise('/boardList',        {templateUrl:'/board/boardList.html',   controller:'boardListController'  });
});
