/* ================================================== ForEach  Loop ================================================

    The forEach() method is used to execute a callback function once for each element in an array.

    It is a higher order function that means it either takes another function as parameter inside it or returns another function as their output

    It is a method (not a loop keyword or built-in function) and is available on array objects.

    You can pass three parameters to the callback function:
      1. value        → The current element being processed.
      2. index        → The index of the current element.
      3. arrayItSelf  → The entire array being iterated.

    All three are optional based on your needs.

    Syntax:
        array.forEach(function(value, index, array) {
            // Code to execute for each element
        });

    Note:
    - It does not return a new array.
    - It cannot be stopped or broken before completion (unlike a regular loop).

*/

// // ----------  Example using normal function ----------

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function printEachNumber(number) {
//   console.log(number);
// });

// // ----------  Example using arrow function ----------

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//   console.log(number);
// });

// // ---------- Example using three parameter in forEach(value, index, ourArray); ----------

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index, numbers) => {
//   console.log(number, index, numbers);
// });

// ---------- Excercise: For given array of numbers, print the square of each value using the forEach Loop ----------

let nums = [2, 3, 4, 5, 6];
console.log(nums);
let squareOfNums = [];

nums.forEach((num) => {
  squareOfNums.push(num * num);
});
console.log(squareOfNums);
