
var boardApplication = angular.module('boardApplication', ['ngRoute', 'boardServiceApplication']);

boardApplication.controller('boardListController', function ($scope, boardService) {

	boardService.getBoardList(function(result){
		$scope.boardList = result;
	});
});


boardApplication.controller('boardViewController', function ($scope) {
	alert('boardViewController');
});

boardApplication.controller('boardInsertController', function ($scope, boardService) {

	$scope.insertBoard = function(){
		boardService.insertBoard(function(result){
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
