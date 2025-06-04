/**
--------------------------------------------------- Fetch API ---------------------------------------------------
 
    -> The Fetchi API provides and interface for fetching (sending/receiving) resources.

    -> It uses Request and Response objects

    -> The fetch() method is used to fetch a resource (data).

    -> syntax: 
    let promise = fetch( url, [options] )

    -> Response Status Code : 200  *means a successfull request

    -> When we send request to API we get a response and this response can be in two format. (now its mostly JSON) but for knowledge this are the two format

        1] AJAX is Asynchronous JS & XML (OLD)
        2] AJAJ is Asynchronous JS & JSON (NEW)

        JSON is JavaScript Object Notation

        - To view the response which is in JSON format we use the :

        json() method : returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)

    -> Different type of request

      GET: Retrieve data (e.g., get list of products)

      POST: Send data to create something new (e.g., place an order)

      PUT: Update/replace existing data fully (e.g., update user profile)

      DELETE: Remove data (e.g., delete a blog post)

*/


// // ****** Using 'GET' by default the request is 'GET' ******

const URL = "https://dog.ceo/api/breeds/list/all";

const dogBreed = document.querySelector("#dogBreed");

const btn = document.getElementById("btn");

const getDogBreeds = async function () {
  console.log("getting data ......");

  const response = await fetch(URL); // the response will be stored so we can call it repsonse
  console.log(response); // Response is of type object from the fetch API
  
  let useAbleData = await response.json();
  
  // useAbleData.message is an object where each key is a breed,
  // and the value is an array of sub-breeds (or an empty array if none).
  // Here, we access the 'bulldog' breed's sub-breeds and log the third one (index 2).
  dogBreed.textContent = useAbleData.message.bulldog[2];
};

btn.addEventListener("click", getDogBreeds);


// // ****** Using 'POST' method in Fetch API by taking a example URL ******

// // The API endpoint where we want to send data (this should support POST)
// const URL = "https://example.com/api/add-dog"; // Replace with a real POST endpoint

// // Grabbing elements from the DOM
// const dogBreed = document.querySelector("#dogBreed"); // Where we’ll display the response
// const btn = document.getElementById("btn"); // Button that triggers the request

// // The function that will run when the button is clicked
// const sendDogBreed = async function () {
//   console.log("Sending data to the server...");

//   // Sending a POST request using fetch
//   const response = await fetch(URL, {
//     method: "POST", // 🔁 We're sending data to the server (not just requesting it)

//     headers: {
//       "Content-Type": "application/json", // 🧠 Tells the server we’re sending JSON data
//     },

//     body: JSON.stringify({
//       breed: "bulldog",        // 🐶 Our data: breed name
//       subBreed: "english",     // 🐾 Sub-breed (example value)
//     }), // 👆 We convert our JS object to a JSON string here
//   });

//   // Converting the server's JSON response into a JS object
//   const result = await response.json();

//   // Logging the server’s reply
//   console.log("Server Response:", result);

//   // Displaying server response message (if any) in the DOM
//   dogBreed.textContent = result.message || "Breed submitted!";
// };

// // Listening for a click event on the button, which will trigger the POST function
// btn.addEventListener("click", sendDogBreed);
