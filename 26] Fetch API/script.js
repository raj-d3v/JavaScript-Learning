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

*/

const URL = "https://dog.ceo/api/breeds/list/all";

const dogBreed = document.querySelector("#dogBreed");

const btn = document.getElementById("btn");

const getDogBreeds = async function () {
  console.log("getting data ......");
  let response = await fetch(URL); // the response will be stored so we can call it repsonse
  console.log(response); // Response is of type object from the fetch API
  let useAbleData = await response.json();
  // useAbleData.message is an object where each key is a breed,
  // and the value is an array of sub-breeds (or an empty array if none).
  // Here, we access the 'bulldog' breed's sub-breeds and log the third one (index 2).
  dogBreed.textContent = useAbleData.message.bulldog[2];
};

btn.addEventListener("click", getDogBreeds);
