/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 컨트롤러
*/
angular.module('boardApplication', ['ngRoute', 'initializeInterceptor', 'boardServiceApplication'])

.controller('retrieveBoardListController', function ($scope, boardService) {

	$scope.board = {};
	boardService.retrieveBoardList($scope.board, function(data){
		$scope.boardList = data;
	});
})

.controller('retrieveBoardController', function ($scope, $routeParams, $location, boardService) {

	$scope.board = {};
	boardService.retrieveBoard($routeParams, function(data){

		$scope.board._id      = data._id;
		$scope.board.name     = data.name;
		$scope.board.title    = data.title;
		$scope.board.contents = data.contents;
	});

	$scope.deleteBoard = function(){
		boardService.deleteBoard($scope.board, function(data){
			$location.url("/retrieveBoardList");
		});
    };
})

.controller('insertBoardController', function ($scope, $location, boardService) {

	$scope.board = {};
	$scope.insertBoard = function(){
		boardService.insertBoard($scope.board, function(data){
			$location.url("/retrieveBoardList");
		});
    };
})

.controller('updateBoardController', function ($scope, $routeParams, $location, boardService) {

	$scope.board = {};
	boardService.retrieveBoard($routeParams, function(data){

		$scope.board._id      = data._id;
		$scope.board.name     = data.name;
		$scope.board.title    = data.title;
		$scope.board.contents = data.contents;
	});

	$scope.updateBoard = function(){
		boardService.updateBoard($scope.board, function(data){
			$location.url("/retrieveBoardList");
		});
    };
})

.directive("directiveLayout", function(){
    return {
        restrict    : "E", // E:element, A:attribute, C:class
        scope       : false,
		templateUrl : function(element, attribute){
			return "/common/" + attribute.type + ".html";
		}
    };
})

.config(function($routeProvider) {

	$routeProvider.when     ('/retrieveBoardList',  {templateUrl:'/board/retrieveBoardList.html', controller:'retrieveBoardListController'});
	$routeProvider.when     ('/retrieveBoard/:_id', {templateUrl:'/board/retrieveBoard.html',     controller:'retrieveBoardController'    });
	$routeProvider.when     ('/insertBoard',        {templateUrl:'/board/insertBoard.html',       controller:'insertBoardController'      });
	$routeProvider.when     ('/updateBoard/:_id',   {templateUrl:'/board/updateBoard.html',       controller:'updateBoardController'      });
	$routeProvider.otherwise('/retrieveBoardList',  {templateUrl:'/board/retrieveBoardList.html', controller:'retrieveBoardListController'});
});
