/*
    author      : 임정채
    date        : 2015.11.23 17:20
    description : 게시판 버튼 디렉티브
*/
angular.module('app.directive.board', [])

.directive("nalanhiButton", function(){
    return {
        restrict    : "E", // E:element, A:attribute, C:class
        scope       : false,
		templateUrl : function(element, attribute){
			return "/common/" + attribute.type + ".html";
		}
    };
});
