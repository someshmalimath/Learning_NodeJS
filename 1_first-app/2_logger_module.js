var url = 'http://mylogger.io/log';

function log(message) {
    //Send an Http request
    console.log(message);
}

module.exports.log = log;   // Export the func name and var name as module APIs
module.exports.endpoint = url;  // Variable Name exported can be different


//NOTE:
//      You can just export a function like
//      --> module.exports = log    // So now it's not an object that you're exporting, it's a function
//      And in the calling file
//      --> const log = require('./logger')
//      --> log('message')      // Note: 