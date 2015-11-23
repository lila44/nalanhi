/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 서비스
*/
angular.module('app.service.board', [])

.service('boardService', function($http) {

    this.retrieveBoardList = retrieveBoardList;
    this.retrieveBoard     = retrieveBoard;
    this.insertBoard       = insertBoard;
    this.updateBoard       = updateBoard;
    this.deleteBoard       = deleteBoard;

	function retrieveBoardList(params, callback) {
		var stream = $http({
			method : 'get',
			url    : '/board/retrieveBoardList',
			data   : null
		}).success(function(data) {
			callback(data.result);
		});
	}

	function retrieveBoard(params, callback) {
		var stream = $http({
			method : 'get',
			url    : '/board/retrieveBoard/' + params._id,
			data   : null
		}).success(function(data) {
			callback(data.result);
		});
	}

	function insertBoard(params, callback) {
		var stream = $http({
	        method   : 'post',
	        url      : '/board/insertBoard',
			data     : angular.toJson(params)
		}).success(function(data) {
			callback(data.result);
		});
	}

	function updateBoard(params, callback) {
		var stream = $http({
	        method   : 'put',
	        url      : '/board/updateBoard/' + params._id,
			data     : angular.toJson(params)
		}).success(function(data) {
			callback(data.result);
		});
	}

	function deleteBoard(params, callback) {
		var stream = $http({
	        method   : 'delete',
	        url      : '/board/deleteBoard/' + params._id,
			data     : null
		}).success(function(data) {
			callback(data.result);
		});
	}

});
