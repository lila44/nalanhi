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

            /*
                todo. 20151104 임정채 메세지 템플릿 추가해서 해당 메세지 정보에 따라 반환하도록 처리
            */
            var message = response.data.message;
            if(message){
                if     ('insert.ok' == message){ alert('저장되었습니다.'); }
                else if('update.ok' == message){ alert('수정되었습니다.'); }
                else if('delete.ok' == message){ alert('삭제되었습니다.'); }
            }

			return response;
		},
		responseError : function(rejection){
			console.log('responseError = ', rejection);
			return $q.reject(rejection);
		}
	};
};
