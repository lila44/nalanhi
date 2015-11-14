/*
    author      : 임정채
    date        : 2015.11.03 23:53
    description : initialize interceptor
*/
angular.module('initializeInterceptor', []).config(function($httpProvider) {
    $httpProvider.interceptors.push(interceptor);
});

var interceptor = function($injector, $q, $location){

	return{
		request : function(config){
			return config;
		},
		response : function(response){
            var message = response.data.message;
            if(message){
                alert(message);
            }
			return response;
		},
		responseError : function(rejection){
			console.log('responseError = ', rejection);
			return $q.reject(rejection);
		}
	};
};
