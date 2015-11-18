/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : 게시판 라우터
*/
var router       = require('express').Router();
var boardService = require(_root + '/back/service/board/boardService');

// module exports
module.exports = router;


router.get('/board/retrieveBoardList', function(request, response){
    var params = {};
    boardService.retrieveBoardList(params, function(e, data){
        response.json(data);
    });
});

router.get('/board/retrieveBoard/:_id', function(request, response){
    var params = {id:request.params._id};
    boardService.retrieveBoard(params, function(e, data){
        response.json(data);
    });
});

router.post('/board/insertBoard', function(request, response){
    var params = {body:request.body};
    boardService.insertBoard(params, function(e, data){
        response.json(data);
    });
});

router.put('/board/updateBoard/:_id', function(request, response){
    var params = {id:request.params._id, body:request.body};
    boardService.updateBoard(params, function(e, data){
        response.json(data);
    });
});

router.delete('/board/deleteBoard/:_id', function(request, response){
    var params = {id:request.params._id, body:request.body};
    boardService.deleteBoard(params, function(e, data){
        response.json(data);
    });
});
