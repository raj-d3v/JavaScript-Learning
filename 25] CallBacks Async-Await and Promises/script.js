/*
------------------------------------ Handling Asynchronous Code in JavaScript ------------------------------------

There are three main ways to handle asynchronous operations in JavaScript:

1. Callback Functions
   - The earliest way to handle async code.
   - You pass a function (callback) that runs after an async task finishes.
   - Can lead to nested callbacks known as "callback hell," which is hard to read and maintain.

2. Promises
   - An object representing the eventual completion (or failure) of an async operation.
   - Helps avoid callback hell by allowing chaining with .then() for success and .catch() for errors.
   - Improves readability and error handling compared to callbacks.

3. Async/Await
   - Syntactic sugar built on top of Promises.
   - Allows writing asynchronous code that looks like synchronous code.
   - Uses the 'async' keyword for functions returning a Promise.
   - Uses 'await' to pause execution until the Promise settles.
   - The cleanest and most readable way to handle async operations.

Note: Async/Await cannot be used without Promises underneath. They are not separate concepts but layers of abstraction built on top of Promises.

*/

/////////////////////////////////////////
// Example implementations below:
/////////////////////////////////////////

/*
------------------------------------ Callback Version ------------------------------------

-> Uses a callback function passed as an argument.
-> Old school way to handle async operations.
-> Can get messy with nested callbacks ("callback hell").
*/

function fetchUserDataCallback(callback) {
  console.log("Fetching user data (callback)...");

  setTimeout(() => {
    const user = { name: "John Doe", email: "john@example.com" };
    callback(null, user); // first arg for error, second for data
  }, 2000);
}

// Using callback version
fetchUserDataCallback((error, data) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Callback Version:", data);
  }
});

/*
------------------------------------ Promise Version ------------------------------------

-> Promises represent eventual completion (or failure) of async operation.
-> Helps avoid callback hell by chaining .then() and .catch().
*/

function fetchUserDataPromise() {
  return new Promise((resolve, reject) => {
    console.log("Fetching user data (promise)...");

    setTimeout(() => {
      const success = true; // simulate success or failure

      if (success) {
        const user = { name: "John Doe", email: "john@example.com" };
        resolve(user);
      } else {
        reject("Failed to fetch user data");
      }
    }, 2000);
  });
}

// Using Promise with .then() and .catch()
fetchUserDataPromise()
  .then((data) => console.log("Promise Version:", data))
  .catch((error) => console.log("Error:", error));

/*
------------------------------------ Async/Await Version ------------------------------------

-> async/await is syntactic sugar built on top of Promises.
-> Makes async code look synchronous and easier to read.
-> async functions always return a Promise.
-> await pauses execution until the Promise resolves or rejects.
*/

async function fetchUserDataAsync() {
  try {
    const data = await fetchUserDataPromise(); // wait until promise resolves
    console.log("Async/Await Version:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUserDataAsync();
