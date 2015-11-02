var mongoose  = require('mongoose');

// connect
mongoose.connect(process.env.MONGO_DB);

// ready
mongoose.connection.once('open', function(){
    console.log('db ready..');
});

// return mongoose
this.getMongoose = function(){
    return mongoose;
};
