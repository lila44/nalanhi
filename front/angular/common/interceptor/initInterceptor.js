/*
    author      : 임정채
    date        : 2015.11.03 23:53
    description : initialize interceptor
*/
var initInterceptor = angular.module('initInterceptor', []);

initInterceptor.config(function($httpProvider) {
    $httpProvider.interceptors.push(intercepter);
});

var intercepter = function($q, $location){
	return{
		request : function(config){
			//console.log('request = ', config);
			//console.log('request interceptor ok : ', config.url);
			return config;
		},
		response : function(result){
			//console.log('response = ', result);
			//console.log('response interceptor ok');
			return result;
		},
		responseError : function(rejection){
			console.log('responseError = ', rejection);
			//$location.url('/boardInsert');
			return $q.reject(rejection);
		}
	};
};
