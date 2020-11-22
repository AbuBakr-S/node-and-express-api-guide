// Build dynamic URL query by joining variables
// q = Place Name
const baseURL = 'http://api.geonames.org/search?name='; 
const apiKey = '&maxRows=1&type=json&username=as20';  

//  Make a GET request on click
document.getElementById('search').addEventListener('click', performAction);

function performAction(e){
  // Retrieve the user inputted place name after the user clicks the search button
  let placeName = document.getElementById('city').value;
  getPlaceName(baseURL, placeName, apiKey)
}

// GET Request
const getPlaceName = async(baseURL, placeName, apiKey) => {
  const res = await fetch(baseURL+placeName+apiKey)
  try {
    const data = await res.json();
    console.log(data.geonames[0]);
    console.log(`Latitude: ${data.geonames[0].lat}`);
    console.log(`Longitude: ${data.geonames[0].lng}`);
    console.log(`Country Name: ${data.geonames[0].countryName}`);
  } catch(error) {
    console.log("error", error);
  }
}

/*
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

postData('/addMovie', {movie: 'The Dark Knight Rises', score: 5});
postData('/addMOvie', {movie: 'Black Panther', score: 3});
postData('/addMOvie', {movie: 'Jumanji', score: 4});
postData('/addMOvie', {movie: 'Hot Fuzz', score: 1});
postData('/addMOvie', {movie: 'Avengers', score: 3});
*/