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

    - body-parser
    request.body   : Post로 넘어온 값이라고 보면 됩니다.
    request.query  : Get으로 넘어온 값이라고 보면 됩니다.
    request.params : RESTful 요청에 동적으로 변경되는 :variable에 대한 처리

*/
var express     = require('express');
var path        = require('path');
var mongoose    = require('mongoose');
var application = express();

var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


// ejs
application.set('view engine', 'ejs');

// web path
application.use(express.static(path.join(__dirname, '/public')));

// json parser
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended:true}));

// method override
application.use(methodOverride("_method"));


// database - connection
mongoose.connect(process.env.MONGO_DB);
var connection = mongoose.connection;
connection.once('open', function(){
    console.log('db ready..');
});
connection.on('error', function(e){
    console.log('db error : ' + e);
});

// database - schema
var schema = mongoose.Schema({
    title     : {type:String, required:true    },
    body      : {type:String, required:true    },
    createdAt : {type:Date,   default :Date.now},
    updatedAt : Date
});

// database - datasource
var datasource = mongoose.model('post', schema);



// Index
application.get('/posts', function(request, response){
    datasource.find({}).sort('-createdAt').exec(function(e, posts){
        if(e){ return response.json({success:false, message:e}); }
        response.json({success:true, data:posts});
    });
});

// Create
application.post('/posts', function(request, response){
    datasource.create(request.body.post, function(e, post){
        if(e){ return response.json({success:false, message:e}); }
        response.json({success:true, data:post});
    });
});

// Show
application.get('/posts/:id', function(request, response){
    datasource.findById(request.params.id, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, data:post});
    });
});

// Update
application.put('/posts/:id', function(request, response){

    request.body.post.updatedAt = Date.now();

    datasource.findByIdAndUpdate(request.params.id, request.body.post, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, message:post._id + "updated"});
    });
});

// Detory
application.delete('/posts/:id', function(request, response){
    datasource.findByIdAndRemove(request.params.id, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, message:post._id + "deleted"});
    });
});

// listen request
application.listen(7777, function(){
    console.log('server ready..');
});
