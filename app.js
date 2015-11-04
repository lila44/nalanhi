/*
    author      : 임정채
    date        : 2015.10.26 22:15
    description : node.js 최초 테스트 모듈

    Restful
    - Index  | GET    | 복수조회
    - Show   | GET    | 단일조회
    - New    | GET    | 등록폼
    - Create | POST   | 등록저장
    - Edit   | GET    | 수정폼
    - Update | PUT    | 수정저장
    - Detory | DELETE | 삭제

    body-parser
    - request.body   : Post로 넘어온 값이라고 보면 됩니다.
    - request.query  : Get으로 넘어온 값이라고 보면 됩니다.
    - request.params : RESTful 요청에 동적으로 변경되는 :variable에 대한 처리

*/
var express               = require('express'                                                   );
var path                  = require('path'                                                      );
var bodyParser            = require('body-parser'                                               );
var methodOverride        = require('method-override'                                           );
var initializeInterceptor = require(__dirname + '/back/common/interceptor/initializeInterceptor');
var boardRouter           = require(__dirname + '/back/router/boardRouter'                      );
var application           = express();


// web path
application.use(express.static(__dirname + '/front/public'            ));
application.use(express.static(__dirname + '/front/angular/view'      ));
application.use(express.static(__dirname + '/front/angular/common'    ));
application.use(express.static(__dirname + '/front/angular/service'   ));
application.use(express.static(__dirname + '/front/angular/controller'));

// package - json parser
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended:true}));

// package - method override
application.use(methodOverride("_method"));

// middleware - initializeInterceptor
application.use(function(request, response, next) {
    initializeInterceptor.initialize(request, response, next);
});

// routes - boardRouter
application.use(boardRouter);


// listen request
application.listen(7777, function(){
    console.log('server ready..');
});
