const os = require('os');


console.log(os.totalmem());
console.log(os.freemem());

//Another way of printing is using Template String
console.log(`Total Memory : ${os.totalmem()}`); //Note the back tick character and not quote

// Since Node executes the java script on the server, the info of opertating system will be userful