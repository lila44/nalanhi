/*
    author      : 임정채
    date        : 2015.10.26
    description : node.js 최초 테스트 모듈
*/

var express     = require("express");
var application = express();

/*
    인덱스 페이지
    @param request  : 요청
    @param response : 응답
    @return         : 환영 메세지
*/
application.get('/', function(request, response){
    response.send("hello node.js 1");
});

/*
    사용자 요청 연결
    @param request  : 요청
    @param response : 응답
    @return         : 환영 메세지
*/
application.listen(7777, function(){
    console.log("connect..");
});
