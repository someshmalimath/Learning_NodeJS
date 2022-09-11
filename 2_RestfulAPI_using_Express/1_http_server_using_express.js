const express = require('express');     //This returns a function

const app = express();      //Returns an object
                            //  The object has methods get(), port(), put() & delete()


app.use(express.json());    // Add a middleware returned by express.json() for the express object to use

//ALL these URLs are called Endpoints!!

// ******* Response to GET request *********
// Define what to do when a HTTP get is received
app.get('/', (req, resp) => {
    resp.send("Hello World!!");
    console.log(req, resp);
});

const courses = [
    {id:3, name: "course3"},

];

app.get('/api/courses', (req, resp) => {
    resp.send(courses);
    //console.log(req, res);
});

//get a particular course using a parameter
app.get('/api/courses/:id', (req, resp) => {    //HTTP address to browse is localhost:3000//api/courses/1
    //resp.send(req.params.id);                    //Use req.params.id to read the parameter
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) resp.status(404).send('The course with Id not found');

    resp.send(course);
    console.log(course);
});

//two parameters in get
app.get('/api/posts/:year/:month', (req, resp) => { //localhost:3000/api/posts/2018/11/
    resp.send(req.params); 
    console.log(req.params);
});

//query parameters in get e.g query localhost:3000/api/posts/2018/11?sortBy=name
app.get('/api/posts_q/:year/:month', (req, resp) => { 
    resp.send(req.query); 
    console.log(req.query);         //Query parameters are the ones after '?' in the query --> it can be anything
                                    // They'll be printed as key val pairs like { soryBy : "name" }
});


// ******* Response to POST request *********
// Use postman extension of chrome to send POST request [Use Raw Body, JSON format]
app.post('/api/courses', (req, resp) => {
    const course = {                    // Create a course object
        id: courses.length + 1,
        name: req.body.name             //This needs that the req obj needs to be stored as json, so enable it by using app.use(express.json())
    };

    courses.push(course);

    resp.send(course);          //Everytime there is a successful POST to create a new object, the response should have the object in the body of the response.
                                //Here the client needs to know the ID of the object created by the server
});

//app.listen(3000, () => console.log('Listening on Port 3000'));
//Port 3000 may not be always be available.
//So, use the environment variable
// set the PORT variable as export PORT=5000 from Shell
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));    //Note back quotes 
