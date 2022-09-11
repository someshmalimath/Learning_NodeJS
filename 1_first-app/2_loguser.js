//var my_logger = require('./logger_module');     //Since logger module is in same folder ./

// The best practice is to store the loaded module in a const!!
const my_logger = require('./2_logger_module');   // the my_logger object can't be reset

console.log(my_logger);
my_logger.log('message');