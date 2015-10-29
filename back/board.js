var mongoose  = require('mongoose');


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
    name      : {type:String, required:true    }
});


// database - datasource
var datasource = mongoose.model('c_boards', schema);

// 게시판 목록
exports.boardList = function(request, response){
    datasource.find({}).sort('-name').exec(function(e, data){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json(data);
    });
};

// 게시판 목록
exports.insertBoard = function(request, response){
    // todo. request 안에 있는 json 정보를 어떻게 가져오나?
    datasource.create({title:'제목', name:'이름'}, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, data:post});
    });
};
