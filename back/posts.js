
var express       = require('express');
var mongoose      = require('mongoose');

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


// Main
exports.main = function(request, response){

    response.sendfile('/index.html');
};

// Index
exports.index = function(request, response){

    datasource.find({}).sort('-createdAt').exec(function(e, posts){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json(posts);
    });
};

// Create
exports.create = function(request, response){

    datasource.create({title:request.param('title'), body:request.param('body')}, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, data:post});
    });
};

// Show
exports.show = function(request, response){

    datasource.findById(request.params.id, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, data:post});
    });
};

// Update
exports.update = function(request, response){

    request.body.post.updatedAt = Date.now();
    datasource.findByIdAndUpdate(request.params.id, request.body.post, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, message:post._id + "updated"});
    });
};

// Detory
exports.destory = function(request, response){

    datasource.findByIdAndRemove(request.params.id, function(e, post){
        if(e){ console.log(e); return response.json({success:false, message:e}); }
        response.json({success:true, message:post._id + "deleted"});
    });
};
