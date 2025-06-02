/**  Array - Collection of data
    
    -> Arrays are mutable means the data inside can be changed

    -> Arrays are also object.

*/

// // Exercise 1 : Calculate the average marks of the class

// let marks = [85, 97, 44, 37, 76, 60];
// let markSum = 0;

// for (let mark of marks) {
//   markSum += mark;
// }

// let averageOfMarks = markSum / marks.length;

// console.log(averageOfMarks);

// // Exercise 2: Apply 10% discount on the given array and display the new array

// let prices = [250, 645, 300, 900, 50];
// console.log(prices);

// for (let i = 0; i < prices.length; i++) {
//   let offer = prices[0] / 10;
//   prices[i] -= offer;
// }

// console.log(prices);

// // =================================================== Array Methods ===================================================

// // push() : add to end - changes are done in the original array

// // pop()  : delete from end  - changes are done in the original array & returns the deleted item

// // concat() : joins multiple arrays & returns result in a new array

// // unshift() : add to start - changes are done in the original array

// // shift() : delete from start & return - changes are done in the original array

// // toString() : converts array to string - doesn't change the original array but returns a new string

// // slice() : returns a piece of array doesn't change the original array. syntax: slice(startIndex, endIndex);

// // splice() : change original array (add, remove, replace). syntax: splice(startIndex, deleteCount, newElement);

// // -- Example of push() , we can push multiple items --
// let cars = ["lambo", "ferrari", "bugatti", "limo"];
// cars.push("benz", "W");
// console.log(cars);

// // -- Example of pop() , we can only pop the last item --
// let cars = ["lambo", "ferrari", "bugatti", "limo"];
// let deletedCar = cars.pop();

// console.log(cars);
// console.log("Deleted Car:", deletedCar);

// // -- Example of toString()
// let cars = ["lambo", "ferrari", "bugatti", "limo"];
// let carsToString = cars.toString();

// console.log(carsToString);

// // -- Example of concat() - we can concat multiple array
// let marvelHeroes = ["Ironman", "Captain-America", "Thor"];

// let dcHeroes = ["Batman", "Superman", "Aquaman"];

// let marvelDc = marvelHeroes.concat(dcHeroes);

// console.log(marvelDc);

// // -- Example of unshift()
// let fruits = ["Sugarcane", "Watermelon", "Strawberry"];
// fruits.unshift("BlueBerry");
// console.log(fruits);

// // -- Example of shift()
// let fruits = ["Sugarcane", "Watermelon", "Strawberry"];

// let deletedFruit = fruits.shift();
// console.log(fruits);
// console.log("Deleted Fruit: ", deletedFruit);

// // -- Example of slice()
// let fruits = ["Sugarcane", "Watermelon", "Strawberry", "Blueberry"];

// console.log(fruits);

// console.log(fruits.slice(0, 2));

// // -- Example of splice()
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// // add Elements or we can add single as well
// numbers.splice(8, 0, 8, 9); // added two numbers from index 8
// console.log(numbers);

// // delete Elements
// numbers.splice(8, 2); // deleted two numbers from index 8
// console.log(numbers);

// // add and delete together
// numbers.splice(7, 1, 107); // from index 7 deleted a number and added a numbers
// console.log(numbers);

// what if we pass a single number inside splice()
// numbers.splice(5); // from the 5th index all the numbers will be deleted
// console.log(numbers);

// // ------------------------------------------ Excercise ------------------------------------------

// // -- Remove the first company from the array
// // -- Remove Uber & Add Ola in its place
// // -- Add Amazon at the end

// // Given array
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);

// companies.shift();
// console.log(companies);

// companies.splice(1, 1, "Ola");
// console.log(companies);

// companies.push("Amazon");
// console.log(companies);
