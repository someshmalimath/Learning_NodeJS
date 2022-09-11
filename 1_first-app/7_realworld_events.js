const EventEmitter = require('events');

const Logger = require('./7_logger_module');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {       //logger is has inheritted EventEmitter, so this is like emitter.on
    console.log('Listener called ', arg);
});

logger.log('This is a message');