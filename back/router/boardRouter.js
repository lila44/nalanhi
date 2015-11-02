var express  = require('express');
var mongodb  = require('./../common/mongodb');
var mongoose = mongodb.getMongoose();
var router   = express.Router();

// export router
module.exports = router;

// collection : c_boards(업체게시판)
var c_board_schema = mongoose.Schema({
    title     : {type:String,   required:true },
    name      : {type:String,   required:true },
    contents  : {type:String,   required:true }
}, {versionKey:false});

// datasource
var datasource = mongoose.model('c_boards', c_board_schema);


router.get('/board/boardList', function(request, response){
    datasource.find({}).sort('-name').exec(function(e, data){
        response.json(data);
    });
});

router.get('/board/boardView/:_id', function(request, response){
    datasource.findById(request.params._id, function(e, data){
        response.json(data);
    });
});

router.post('/board/insertBoard', function(request, response){
    datasource.create(request.body, function(e, data){
        response.json(data);
    });
});

router.put('/board/updateBoard/:_id', function(request, response){
    datasource.findByIdAndUpdate(request.params._id, request.body, function(e, data){
        response.json(data);
    });
});

router.delete('/board/deleteBoard/:_id', function(request, response){
    datasource.findByIdAndRemove(request.params._id, function(e, data){
        response.json(data);
    });
});
