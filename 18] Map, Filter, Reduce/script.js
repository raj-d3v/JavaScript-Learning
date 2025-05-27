/* Some more Array methods: 

        1] .map() : 
        
        > works like .forEach(), but it returns a new array with the results, whereas .forEach() does not return a new array.

        > syntax: arrName.map(callbackFunction( value, index, array ))

        > we can pass three parameters if we want

        2] .filter() :

        > Creates a new array of elements that give true for a condition
        E.g: All even elements

        3] .reduce() :

        > Performs some operations & reduces the array to a single value. It returns that single value

        > The first thing in the function keeps the result so far, and the second thing is the current item from the array.

*/

// // ----- EXAMPLE OF MAP() -----

// let nums = [67, 52, 39];

// let newArray = nums.map((num) => {
//   return num;
// });

// console.log(newArray);

// // ----- EXAMPLE OF FILTER() -----
// let nums = [1, 2, 3, 4, 5, 6, 7];

// let evenArray = nums.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(evenArray);

// // ----- EXAMPLE OF REDUCE(): Adding all the numbers in the array -----
// let nums = [1, 2, 3, 4];

// let output = nums.reduce((result, current) => {
//   return result + current;
// });

// console.log(output);

// -------------------- Exercise  --------------------

// // 1] We are given array of marks of students. Filter out of the marks of students that scored 90+.

// let marks = [87, 93, 64, 99, 86];

// let highestScore = marks.filter((mark) => {
//   return mark > 90;
// });

// console.log(highestScore);

// // 2] Take a number n as input from user. Create an array of numbers from 1 to n. Use .reduce() to calculate sum of all numbers in the array

// let nums = prompt("Enter a number: ");
// let arr = [];

// for (i = 1; i <= nums; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let sumOfNum = arr.reduce((currentVal, nextVal) => {
//   return currentVal + nextVal;
// });

// console.log(sumOfNum);
