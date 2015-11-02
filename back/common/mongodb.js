var mongoose  = require('mongoose');

// connect
mongoose.connect(process.env.MONGO_DB);

// ready
var connection = mongoose.connection;
connection.once('open', function(){
    console.log('db ready..');
});


this.getMongoose = function(){
    return mongoose;
};

/*
    Connection 반환
    @return connection
*/
this.getConnection = function(){
    return mongoose.connection;
};

/*
    Datasource 반환
    @param collectionName 컬렉션명
    @param schema         커렉션스키마
    @return datasource
*/
this.getDatasource = function(collectionName, schema){
    return mongoose.model(collectionName, schema);
};
