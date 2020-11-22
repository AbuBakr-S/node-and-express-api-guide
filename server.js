// Express to run server and routes
const express = require('express');
/* Dependencies */
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors = require('cors');
// Display full Object in console
const util = require('util')

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
const projectMovieData = [];
// Create post request
app.post('/addMovie', function (req, res){
  let data = req.body;
  // Display full Object in console
  console.log(util.inspect(data));
  projectMovieData["entry"] = data;
  console.log(`projectData: ${projectMovieData.entry.movie}`);
});