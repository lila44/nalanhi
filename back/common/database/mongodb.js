/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : mongodb driver
*/
var mongoose = require('mongoose');

// connect
mongoose.connect(_mongodbUri);

// ready
mongoose.connection.once('open', function(){
    console.log('db ready..');
});

// exports
exports.getInstance = getInstance;


function getInstance(){
    return mongoose;
}
