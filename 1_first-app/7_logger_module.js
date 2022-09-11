const EventEmitter = require('events');

var url = 'https://mylogger.io/log';

class Logger extends EventEmitter { //Inheritance
    log(message) {     //function keyword is not needed when defining a func inside a class
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged', {id:1, url: 'https://'});    //'this' means this Logger class
    }
}

module.exports = Logger;    //Export the class