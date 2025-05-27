/* ------------------------------------------------ functions ------------------------------------------------ 
                1] Block of code that performs a specific task and can be used whenever we need it. 
                2] It also saves us from redundancy which means repeatation
                3] the parameters are block scope variables which We write inside function(xyz) can be only used inside that function block
*/

/*  ------------------------ Basic function ------------------------ */

// function myFunction() {
//   console.log("Welcome to my function :) ");
//   console.log("How are you? ");
//   console.log("Welcome to my function :) ");
//   console.log("How are you? ");
// }

// myFunction();

/* ---------------- function with single parameter and argument ---------------- */

// function greetings(msg) {
//   console.log(msg);
// }

// greetings("Hello how are you?"); // argument

/* ---------------- function with two parameter and arguments ---------------- */

// function greetings(msg, response) {
//   console.log(msg);
//  console.log(response);

// }

// greetings("Hello how are you?", "I'm good"); // arguments

/* ------------------------ function with return value ------------------------ */

// function sumOfTwoNumbers(num1, num2) {
//   sum = num1 + num2;
//   return sum;
// }

// let sumOfNumbers = sumOfTwoNumbers(155, 5);
// console.log(sumOfNumbers);

/* ------------------------ Arrow Functions (=>)------------------------ */
// let arrowSum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(arrowSum(20, 30));

// // -- OR --

// let arrowSum = (num1, num2) => num1 + num2;
// console.log(arrowSum(20, 30));



// ----------------------- VOWEL COUNTER ---------------------------
// function vowelCounter(strgs) {
//   let incomingStr = strgs.toLowerCase();
//   let count = 0;

//   for (let str of incomingStr) {
//     if (
//       str === "a" ||
//       str === "e" ||
//       str === "i" ||
//       str === "o" ||
//       str === "u"
//     ) {
//       count++;
//     }
//   }

//   console.log(`Your string has ${count} vowels`);
// }

// vowelCounter("aeioU");
  