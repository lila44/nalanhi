/*
    author      : 임정채
    date        : 2015.11.07 19:28
    description : 업체게시판 반환
*/
var mongoose = require(_root + '/back/common/database/mongodb').getInstance();

// exports
exports.getInstance = getInstance;


// 업체게시판
var boards = mongoose.model('c_boards', mongoose.Schema({
    title     : {type:String, required:true},
    name      : {type:String, required:true},
    contents  : {type:String, required:true}
}));


function getInstance(){
    return boards;
}
