var mongodb  = require('./../common/mongodb');
var mongoose = mongodb.getMongoose();

// collection : c_boards(업체게시판)
var c_board_schema = mongoose.Schema({
    title     : {type:String, required:true },
    name      : {type:String, required:true },
    contents  : {type:String, required:true }
});

var datasource = mongodb.getDatasource('c_boards', c_board_schema);


// 게시판 목록
exports.boardList = function(request, response){
    datasource.find({}).sort('-name').exec(function(e, data){
        if(e){ console.log(e); return response.json( {success:false, message:e}); }
        response.json({success:true, result:data});
    });
};

// 게시판 상세 조회
exports.boardView = function(request, response){
    datasource.find({_id:request.body._id}, function(e, data){
        if(e){ console.log(e); return response.json( {success:false, message:e}); }
        response.json({success:true, result:data});
    });
};

// 게시판 등록
exports.insertBoard = function(request, response){
    datasource.create(request.body, function(e, data){
        if(e){ console.log(e); return response.json( {success:false, message:e}); }
        response.json({success:true, result:data});
    });
};
