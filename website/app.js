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