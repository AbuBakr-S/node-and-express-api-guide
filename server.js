// Express to run server and routes
const express = require('express');
/* Dependencies */
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors = require('cors');


// Start up an instance of app
const app = express();
app.use(express.static('website'));
app.use(cors());


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Setup server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log(`Running on localhost: ${port}`);
}


// Endpoint
const data = [];
// Create post request
app.post('/addMovie', addMovie);
// Add movie data from req.body to endpoint
function addMovie(req, res){
  console.log(req.body);
  data.push(req.body)
}