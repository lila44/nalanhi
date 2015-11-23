/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 컨트롤러
*/
angular.module('app.controller.board', ['ngRoute', 'app.interceptor.initialize', 'oc.lazyLoad'])

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

.config(function($routeProvider) {

	var libList = {
	    retrieveBoardList:{load:function($ocLazyLoad){ return $ocLazyLoad.load (['/css/board.css', '/board/boardService.js', '/board/boardDirective.js']); }},
		updateBoard      :{load:function($ocLazyLoad){ return $ocLazyLoad.load (['/css/board.css', '/board/boardService.js'                            ]); }},
	 	retrieveBoard    :{load:function($ocLazyLoad){ return $ocLazyLoad.load (['/css/board.css', '/board/boardService.js'                            ]); }},
		insertBoard      :{load:function($ocLazyLoad){ return $ocLazyLoad.load (['/css/board.css', '/board/boardService.js'                            ]); }}
	};

	$routeProvider.when     ('/retrieveBoardList',  {templateUrl:'/board/retrieveBoardList.html', controller:'retrieveBoardListController', resolve:libList.retrieveBoardList });
	$routeProvider.when     ('/retrieveBoard/:_id', {templateUrl:'/board/retrieveBoard.html',     controller:'retrieveBoardController',     resolve:libList.retrieveBoard     });
	$routeProvider.when     ('/insertBoard',        {templateUrl:'/board/insertBoard.html',       controller:'insertBoardController',       resolve:libList.insertBoard       });
	$routeProvider.when     ('/updateBoard/:_id',   {templateUrl:'/board/updateBoard.html',       controller:'updateBoardController',       resolve:libList.updateBoard       });
	$routeProvider.otherwise('/retrieveBoardList',  {templateUrl:'/board/retrieveBoardList.html', controller:'retrieveBoardListController', resolve:libList.retrieveBoardList });
});
