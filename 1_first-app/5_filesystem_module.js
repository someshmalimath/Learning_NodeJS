const fs = require('fs');

const files = fs.readdirSync('./')  //Returns all files in the folder Synchronously - Blocking call
console.log(files);

// This is an Asynchronous call and requires a call back to be registered which will be executed when the call returns
// $ simulates an error
fs.readdir('$', function(err, files) { //function is a callback function registered
    if (err) console.log('Error', err);
    else console.log('Result', files);
}); // close readdir's 


//Always prefer to use Asynchronous methods
