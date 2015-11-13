/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 서비스
*/
var boardServiceApplication = angular.module('boardServiceApplication', []);

boardServiceApplication.service('boardService', function($http) {

	this.retrieveBoardList = function(callback) {

		var stream = $http({
			method : 'get',
			url    : '/board/retrieveBoardList',
			data   : null
		}).success(function(data) {
			callback(data.result);
		});
	};

	this.retrieveBoard = function(params, callback) {
		var stream = $http({
			method : 'get',
			url    : '/board/retrieveBoard/' + params._id,
			data   : null
		}).success(function(data) {
			callback(data.result);
		});
	};

	this.insertBoard = function(params, callback) {

		var stream = $http({
	        method   : 'post',
	        url      : '/board/insertBoard',
			data     : angular.toJson(params)
		}).success(function(data) {
			callback(data.result);
		});
	};

	this.updateBoard = function(params, callback) {
		var stream = $http({
	        method   : 'put',
	        url      : '/board/updateBoard/' + params._id,
			data     : angular.toJson(params)
		}).success(function(data) {
			callback(data.result);
		});
	};

	this.deleteBoard = function(params, callback) {
		var stream = $http({
	        method   : 'delete',
	        url      : '/board/deleteBoard/' + params._id,
			data     : null
		}).success(function(data) {
			callback(data.result);
		});
	};
});
