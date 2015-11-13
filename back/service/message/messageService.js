/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 라우터
*/
var messages  = require('./../model/message/message').getInstance();

// exports
exports.getMessage = getMessage;


function getMessage(_key, callback){
    messages.findOne({key : _key}, function(e, data){
        callback(e, data);
    });
}
