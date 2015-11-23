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
var express               = require('express'        );
var path                  = require('path'           );
var bodyParser            = require('body-parser'    );
var methodOverride        = require('method-override');
var application           = express();

// set global
global._root              = path.resolve(__dirname);
global._serverPort        = process.env.NODE_SERVER_PORT;
global._mongodbUri        = process.env.MONGO_DB;
global._message           = require(_root + '/resource/message');

// custom module
var initializeInterceptor = require(_root + '/back/common/interceptor/initializeInterceptor');
var boardRouter           = require(_root + '/back/router/board/boardRouter'                );

// web path
application.use(express.static(_root));
application.use(express.static(_root + '/front/public'            ));
application.use(express.static(_root + '/front/angular/view'      ));
application.use(express.static(_root + '/front/angular/common'    ));
application.use(express.static(_root + '/front/angular/service'   ));
application.use(express.static(_root + '/front/angular/directive' ));
application.use(express.static(_root + '/front/angular/controller'));

// target web path
// application.use(express.static(_root));
// application.use(express.static(_root + '/target/front/public'      ));
// application.use(express.static(_root + '/target/front/angular'     ));
// application.use(express.static(_root + '/target/front/angular/view'));


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
application.listen(_serverPort, function(){
    console.log('server ready..');
});
