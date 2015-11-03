/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 서비스
*/
var boardServiceApplication = angular.module('boardServiceApplication', []);

boardServiceApplication.service('boardService', function($http) {

	this.getBoardList = function(callback) {

		var stream = $http({
			method : 'get',
			url    : '/board/boardList',
			data   : null
		}).success(function(data) {
			callback(data);
		}).error(function(e){
			console.log(e);
		});
	};

	this.getBoardView = function(params, callback) {
		var stream = $http({
			method : 'get',
			url    : '/board/boardView/' + params._id,
			data   : null
		}).success(function(data) {
			callback(data);
		}).error(function(e){
			console.log(e);
		});
	};

	this.insertBoard = function(params, callback) {

		var stream = $http({
	        method   : 'post',
	        url      : '/board/insertBoard',
			data     : angular.toJson(params)
		}).success(function(data) {
			alert('저장되었습니다.');
			callback(data);
		}).error(function(e){
			console.log(e);
		});
	};

	this.updateBoard = function(params, callback) {
		var stream = $http({
	        method   : 'put',
	        url      : '/board/updateBoard/' + params._id,
			data     : angular.toJson(params)
		}).success(function(data) {
			alert('수정되었습니다.');
			callback(data);
		}).error(function(e){
			console.log(e);
		});
	};

	this.deleteBoard = function(params, callback) {
		var stream = $http({
	        method   : 'delete',
	        url      : '/board/deleteBoard/' + params._id,
			data     : null
		}).success(function(data) {
			alert('삭제되었습니다.');
			callback(data);
		}).error(function(e){
			console.log(e);
		});
	};
});
