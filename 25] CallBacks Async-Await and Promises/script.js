/*
------------------------------------ Asynchronous Programming ------------------------------------

-> All three (async/await, promises, callbacks) are different techniques to handle asynchronous code — but they can do the same things. You don’t need to use all of them together.

-> What is better than the other to use
async await > promise chains > callback hell

** Difference Between Asynchronous & Synchronous 

-- Synchronous -- 

It means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution

-- Example: It goes in order
console.log("one");
console.log("two");
console.log("three");

-- Asynchronous -- 

Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI.

Asynchronous code execution allows us to execute next instrutcions immediately and doesn't block the flow. Side by side it runs the block which is taking more time and will display that as well


Example: In this the '3' will be displayed it wont wait for the function to run

console.log("1")

function greeting() {
  console.log("2");
}

setTimeout(greeting, 2000);
console.log("3");

*/

/*
------------------------------------ Callback Function  ------------------------------------

    -> A function that is passed as an argument to another function

    -> used to handle asynchronous operations: 
    1] Reading a file
    2] Network requests
    3] Interacting with databases

    -> Simple terms: 
    "Hey, when you're done, call this next"

    *** What is Callback Hell ***

    -> Nested callback stacked below one another forming a pyramid structure. (Pyramid of Doom)

    -> It is not a error or doesn't get us error but This style of programming becomes difficult to understand & manage

    -> Solution is to use promises

*/

// // Example: Here we are calling the 'goodBye' function inside our 'hello' function so it runs after 'hello' is executed

// function hello(goodBye) {
//   console.log("Hello");
//   goodBye();
// }

// function goodBye() {
//   console.log("Goodbye");
// }

// hello(goodBye);

// // Example of Callback hell :

// function task1(task2) {
//   setTimeout(() => {
//     console.log("Task 1 complete");
//     task2();
//   }, 2000);
// }
// function task2(task3) {
//   setTimeout(() => {
//     console.log("Task 2 complete");
//     task3();
//   }, 2000);
// }
// function task3(task4) {
//   setTimeout(() => {
//     console.log("Task 3 complete");
//     task4();
//   }, 2000);
// }
// function task4(task5) {
//   setTimeout(() => {
//     console.log("Task 4 complete");
//     task5();
//   }, 2000);
// }
// function task5() {
//   setTimeout(() => {
//     console.log("All task complete");
//   }, 2000);
// }
// // This is callback hell look the pyramid below
// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         task5();
//       });
//     });
//   });
// });

/*
------------------------------------ Promises ------------------------------------ 

    -> Promis is for "eventual" completion of task.

    -> It is an object in JS

    -> In general programming we don't create a promise object. If we send API request to get data it returns us promise which we handle in our website

    -> It is a solution to callback hell
    

    -> syntax:  

        let promise = new Promise( (resolve, reject) => { .... })

        * reject & resolve are callbacks provided by JS

    -> Promise has three states
        
        1. Pending
        2. resolve (fulfilled)
        3. rejected

    -> how we handle or use promises in our program. So, for that we use

        .then() & .catch()

    -> To handle a successful response from an API call, use .then().

        promise.then( (resolve) => {...} )

    -> To handle an error from an API call, use .catch().

        promise.catch( (error) => {...} )
   
*/

// // Here we are creating our own promise but generaly we just handle the promise

let promise = new Promise((resolve, reject) => {
  console.log("I'm a promise");
  //   resolve("Success");
  //   reject("Error");
});

/*
------------------------------------ Async & Await ------------------------------------ 


*/
