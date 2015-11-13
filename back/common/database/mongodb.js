/*
    author      : 임정채
    date        : 2015.11.02 13:00
    description : mongodb driver
*/
var mongoose  = require('mongoose');

// exports
exports.getInstance = getInstance;

// connect
mongoose.connect(process.env.MONGO_DB);

// ready
mongoose.connection.once('open', function(){
    console.log('db ready..');
});


function getInstance(){
    return mongoose;
}
