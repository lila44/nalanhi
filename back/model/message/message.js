/*
    author      : 임정채
    date        : 2015.11.07 19:28
    description : 메세지 반환
*/
var mongoose = require('./../../common/database/mongodb').getInstance();

// exports
exports.getInstance = getInstance;


// 메세지
var messages = mongoose.model('c_messages', mongoose.Schema({
    key      : {type:String, required:true},
    message  : {type:String, required:true}
}));


function getInstance(){
    return messages;
}
