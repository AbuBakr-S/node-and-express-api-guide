# Node and Express
Check if Node is installed
`npm -v`

Upgrade Node
`npm install n -g`

Install Node
`npm i node@lts`
https://www.npmjs.com/package/node

Install Express
`npm i express`

Install Middleware - bodyParser
`npm i body-parser`


## Server Side
Once we have created an instance of our app using Express, we can connect the other packages we have installed on the command line to our app in our code with the `.use()` method.

#### Step 1
```
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
```

#### Step 2
```
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
```

### Local Server
Receive Request --> Process Request --> Return Response

* A Port to run the Server on
* A Callback Function to execute

#### Example
```
// Setup server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log(`Running on localhost: ${port}`);
}
```

### Server File Structure
Point server code to client folder:
`app.use(express.static('website'));`

### Routes and Requests
Routes are used to handle requests to the server
* GET request - Get data
* POST request - Send data securely

Use the `app.get()` Express Method to handle HTTP GET Request on our app instance.

* A String that represents the URL Path
* Function - Request and Response

The `req` parameter signifies the "request" from the client to the server. The `res` parameter signifies the "response" from the server to the client.

#### Example
```
const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
})
```

### GET Request - Return Data from Project Endpoint
Create a new route named '/all', so that the route 'localhost:8000/all' will now trigger the GET request, which will return the JavaScript object as laid out in the server code above.

#### Example
```
const express = require('express')
const app = express()
// Create JS object
const appData = {}
// Respond with JS object when a GET request is made to the homepage
app.get('/all', function (req, res) {
  res.send(appData)
})
```

Every GET request produces a request, which is the data provided by the GET request, and a response, which is the data returned to the GET request.

### POST Request - Send Data to Project Endpoint
An HTTP POST request sends data to the project's endpoint, where it is stored and can be accessed through a GET request, which we covered in the last lesson. Here is what a simple POST request could look like using the Express method .post():

#### Example 1
```
// POST method route
app.post('/', function (req, res) {
  res.send('POST received')
})
```

#### Example 2
```
// Endpoint
const data = [];

// Create post request
app.post('/addMovie', addMovie);

// Add movie data from req.body to endpoint
function addMovie(req, res){
  console.log(req.body);
  data.push(req.body)
}
```

## Client Side
Assuming we have set up a POST route in the file server.js file, we will move into the website folder and start writing client side code in a file named app.js. Here is the code we could use to make a POST request to our route:

#### Example - Post Request on Client Side
```
// Async function
const postData = async ( url = '', data = {})=>{
    console.log(data);
      // Set post route and fetch url (where to post)
      const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data),
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/add', {answer:42});
```

## Processing the POST Request
Back on the server side code we should now be able to receive the data `answer:42`. Remember in the last example, **we attached our data to the body of our POST request**, so to receive that data and make it actionable we can use `request.body`.

Here is an example where we set a variable named data to hold the value of `request.body`, and then print `data` to see what we received.

```
app.post('/add', function (request, response) {
    let data = request.body;
    console.log(data);
});
```

The output of this would display in ther terminal: `{answer:42}`

But we don't just want to see the data we received, to complete our POST request we must assign the data we received to our project endpoint, the JS object in our server code named `projectData`. We can simply make a new entry in our JS object using the syntax:

`projectData["x"] = y`

This code would create a new entry in our JS object API endpoint where the value of a string "x" is y. So if the data received from the POST request was `{intelligence:100}`, we could create a new entry in our endpoint with the code: 

```
let data = request.body; 
projectData["intelligence"]= data.intelligence;
```

Notice that we **manually set the string for the key of the new JS object entry as "intelligence"**, and then to access the property we want to set as its value we use `data.intelligence`. For more on JS dot notation see the MDN Web Docs entry on Property accessors.

