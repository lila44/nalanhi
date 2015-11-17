/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : mongodb driver
*/
var mongoose = require('mongoose');
var systems  = require('./../../resource/systems');

// connect
mongoose.connect(systems.database.connection.id);

// ready
mongoose.connection.once('open', function(){
    console.log('db ready..');
});

// exports
exports.getInstance = getInstance;


function getInstance(){
    return mongoose;
}
