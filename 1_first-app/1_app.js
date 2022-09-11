//Run this as node app.js


function sayHello(name) {
    console.log('Hello ' + name)    //console object is a global object - has a global scope
}

sayHello('Somesh')

//console.log(window)     //In Node there is no Window or Document Objects. 
                        //These are something that we get with browsers


//Other Global Objects
//  setTimeout()    - used in client/browser/node
//  clearTimeout()
//  setInterval()   - call a function after the given delay 
//  clearInterval() - stop from calling repeatedly

var message = ''
console.log(global.message)     // gives Undefined. So var message is only visible to this file and not in global scope

console.log(module) // Module is an object

//Note: An Object in JS is same as Dict in Python