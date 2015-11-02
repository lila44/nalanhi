
var boardServiceApplication = angular.module('boardServiceApplication', []);

boardServiceApplication.service('boardService', function($http) {

	this.getBoardList = function(callback) {

		var stream = $http({
			method : 'get',
			url    : '/board/boardList',
			data   : null
		}).success(function(data) {
			if(data.success){
				callback(data.result);
			}
			else{
				alert('처리중 오류가 발생했습니다.');
			}
		});
	};

	this.getBoardView = function(callback, params) {
		var stream = $http({
			method : 'post',
			url    : '/board/boardView',
			data   : params
		}).success(function(data) {
			if(data.success){
				callback(data.result);
			}
			else{
				alert('처리중 오류가 발생했습니다.');
			}
		}).error(function(e){
			alert(e);
		});
	};

	this.insertBoard = function(callback, params) {

		var stream = $http({
	        method   : 'post',
	        url      : '/board/insertBoard',
			data     : params
		}).success(function(data) {
			if(data.success){
				alert('저장되었습니다.');
				callback(data.result);
			}
			else{
				alert('처리중 오류가 발생했습니다.');
			}
		});
	};
});
