/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : mongodb driver
*/
var mongoose = require('mongoose');
var configs  = require('./../../resource/configs');

// connect
mongoose.connect(configs.database.connection.id);

// ready
mongoose.connection.once('open', function(){
    console.log('db ready..');
});

// exports
exports.getInstance = getInstance;


function getInstance(){
    return mongoose;
}
