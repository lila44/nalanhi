/*
    author      : 임정채
    date        : 2015.11.04 16:47
    description : initialize interceptor
*/
function initialize(request, response, next) {
    console.log('application initialize..');
    next();
}

// exports
exports.initialize = initialize;
