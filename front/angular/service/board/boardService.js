
var boardServiceApplication = angular.module('boardServiceApplication', []);

boardServiceApplication.service('boardService', function($http) {

	this.getBoardList = function(callback) {

		var stream = $http({
			method : 'get',
			url    : '/board/boardList',
			data   : null
		}).success(function(data) {
			callback(data);
		}).error(function(e) {
			console.log('e=' + e);
		});
	};

	this.insertBoard = function(callback, params) {

		var stream = $http({
	        method   : 'post',
	        url      : '/board/insertBoard',
			data     : params
		}).success(function(data) {
			alert('저장되었습니다.');
			callback(data);
		}).error(function(e) {
			console.log('e=' + e);
		});
	};
});
