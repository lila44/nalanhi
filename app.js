/*
    author      : 임정채
    date        : 2015.10.26 22:15
    description : node.js 최초 테스트 모듈
*/
var express     = require('express');
var path        = require('path');
var application = express();


// web path 설정
application.use(express.static(path.join(__dirname, 'public')));

// 서버 설정 확인
console.log('web path : ' + __dirname);

/*
    사용자 요청 연결
    @return  환영 메세지
*/
application.listen(7777, function(){
    console.log('connect..');
});
