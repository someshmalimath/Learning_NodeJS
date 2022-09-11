const EventEmitter = require('events'); //EventEmitter is a class

const emitter = new EventEmitter(); //emitter is an object of type EventEmitter

//Register a listener
emitter.on('messageLogged', function() {
    console.log('Listener called!!');
});

//Raise an event
emitter.emit('messageLogged');  //messageLogged is the even name

//Register a listener for event with Arguement
emitter.on('messageLoggedwithArg', function(arg) {
    console.log('Listener called with arg', arg, '!!');
});

// Arrow function has been introduced in ES6 version of NodeJS
// Get rid of function keyword
emitter.on('messageLoggedwithArg_es6', (arg) =>  {
    console.log('Listener called with arg', arg, '!!');
});

emitter.emit('messageLoggedwithArg', {id: 1, url: 'http://'}); //the arguement inside {} is an object which represnets attribute/arguement of the event 
emitter.emit('messageLoggedwithArg_es6', {id: 1, url: 'http://'});
