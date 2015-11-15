server = {
    port : process.env.NODE_SERVER_PORT
};

database = {
    connection : { id : process.env.MONGO_DB }
};


exports.server   = server;
exports.database = database;
