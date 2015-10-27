/*
    author      : 임정채
    date        : 2015.10.26 22:15
    description : node.js 최초 테스트 모듈
*/
var express     = require('express');
var path        = require('path');
var mongoose    = require('mongoose');
var application = express();


// ejs
application.set('view engine', 'ejs');

// web path
application.use(express.static(path.join(__dirname, '/public')));

// 서버 설정 확인
console.log('web path : ' + __dirname);



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
    name  : String,
    count : Number
});

// database - datasource
var datasource = mongoose.model('data', schema);



/// http://localhost:7777/
application.get('/', function(request, response){
    getCount(response);
});

// http://localhost:7777/reset
application.get('/reset', function(request, response){
    setCount(response, 0);
});

// http://localhost:7777/set/count?firstCount=11
application.get('/set/count', function(request, response){
    console.log('request.query.firstCount=' + request.query.firstCount);
    if(request.query.firstCount){
        setCount(response, request.query.firstCount);
    }
    else{
        getCount(response);
    }
});

// http://localhost:7777/set/1234
application.get('/set/:num', function(request, response){
    console.log('request.params.num=' + request.params.num);
    if(request.params.num){
        setCount(response, request.params.num);
    }
    else{
        getCount(response);
    }
});

function setCount(response, num){

    datasource.findOne({name : "limjc"}, function(e, data){
        if(e){ console.log("setCount error : " , e); }
        data.count = num;
        data.save(function(e){
            if(e){ console.log("setCount-save error : " , e); }
            response.render("view.ejs", data);
        });
    });
}

function getCount(response){

    datasource.findOne({name : "limjc"}, function(e, data){
        response.render("view.ejs", data);
    });
}


/*
    사용자 요청 연결
    @return  환영 메세지
*/
application.listen(7777, function(){
    console.log('server ready..');
});
