//It's a security best practice to never trust what the client has sent

const express = require('express');     //This returns a function

const Joi = require('joi');     //Pakage for Error handling - returns a class

const app = express();      //Returns an object
                            //  The object has methods get(), port(), put() & delete()


app.use(express.json());    // Add a middleware returned by express.json() for the express object to use


const courses = [
    {id:1, name: "course1"},
    {id:2, name: "course2"},
    {id:3, name: "course3"},
];

//Novice way of Handling errors
app.post('/api/courses', (req, resp) => {
    if (!req.body.name || req.body.name.length < 3) {
        //400 Bad REquest
        resp.status(400).send('Name is required with min 3 chars');
        return;
    }

    const course = {                    
        id: courses.length + 1,
        name: req.body.name             
    };

    courses.push(course);
    resp.send(course);                 
});


//Install Package called Joi -> npm install joi
app.post('/api/courses_joi', (req, resp) => {

    // We need to define a Schema for Joi
    const schema = Joi.object({
        name: Joi.string()
        .min(3)
        .required()
    });

    const result = schema.validate(req.body);
    
    console.log(result);

    if (result.error) {
            resp.status(400).send(result.error.details[0].message);
            return;
    }

    const course = {                    
        id: courses.length + 1,
        name: req.body.name             
    };

    courses.push(course);
    resp.send(course);                 
});


//Handle Put method
app.put('/api/courses/:id', (req, resp) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return resp.status(404).send('The course with Id not found');

    // Validate
    // If invalid, return 400 - Bad request
    console.log(req.body)
    const result = validateCourse(req.body);        // Validation moved to a function :)
    console.log(req.body, result);
    if (result.error) {
        resp.status(400).send(result.error.details[0].message);
        return;
    }

    // Update course
    course.name = req.body.name;
    // Return the updated course
    resp.send(course);

});


//Handle Delete Method
app.delete('/api/courses/:id', (req, resp) => {
    // Look up the course
    // If not existing, return 404
    console.log(courses);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return resp.status(404).send('The course with Id not found');      //Observe the way to return here!! this avoids extra noise in the code

    //Get the index of the course from courses array
    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);       // Way to Delete. 1 means remove 1 object

    resp.send(course);
    console.log(courses);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));    //Note back quotes 

// Try to Post this from the Postman on http://localhost:3000/api/courses_joi
// {
// 	"name" : "H"
// } 

function validateCourse(course) {
    // We need to define a Schema for Joi
    const schema = Joi.object({
        name: Joi.string()
        .min(3)
        .required()
    });

    return schema.validate(course);

}