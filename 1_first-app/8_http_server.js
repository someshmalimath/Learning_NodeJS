const http = require('http');

const server = http.createServer((req, resp) => {        // createServer is an EventEmitter. (req, resp) => is same as function(req, resp)
    if (req.url === '/') {       //NOTE: Triple =
        resp.write('Hello World');
        resp.end();
    }

    if (req.url === '/api/courses') {       //NOTE: Triple =
        resp.write(JSON.stringify([1,2,3]));
        resp.end();
    }
});

server.on('connection', (socket) => {
    console.log("New connection")
});

server.listen(3000);        //From browser connect to http://localhost:3000

console.log("Listening on 3000!");
