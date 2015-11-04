/*
    author      : 임정채
    date        : 2015.11.03 23:53
    description : initialize interceptor
*/
var initializeInterceptor = angular.module('initializeInterceptor', []);

initializeInterceptor.config(function($httpProvider) {
    $httpProvider.interceptors.push(intercepter);
});

var intercepter = function($q, $location){
	return{
		request : function(config){
			return config;
		},
		response : function(response){
			return response;
		},
		responseError : function(rejection){
			console.log('responseError = ', rejection);
			return $q.reject(rejection);
		}
	};
};
