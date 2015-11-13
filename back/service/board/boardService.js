/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 라우터
*/
var boards   = require('./../../model/board/board'    ).getInstance();
var messages = require('./../../model/message/message').getInstance();

// exports
exports.retrieveBoardList = retrieveBoardList;
exports.retrieveBoard     = retrieveBoard;
exports.insertBoard       = insertBoard;
exports.updateBoard       = updateBoard;
exports.deleteBoard       = deleteBoard;


function retrieveBoardList(params, callback){
    boards.find({}, function(e, data){
        callback(e, {result:data});
    });
}

function retrieveBoard(params, callback){
    boards.findById(params.id, function(e, data){
        callback(e, {result:data});
    });
}

function insertBoard(params, callback){
    boards.create(params.body, function(e, data){
        callback(e, {result:data, message:"insert.ok"});
    });
}

function updateBoard(params, callback){
    boards.findByIdAndUpdate(params.id, params.body, function(e, data){
        callback(e, {result:data, message:"update.ok"});
    });
}

function deleteBoard(params, callback){
    boards.findByIdAndRemove(params.id, function(e, data){
        callback(e, {result:data, message:"delete.ok"});
    });
}
