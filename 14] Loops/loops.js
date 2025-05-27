/* ====== FOR LOOP: We initialize, set the condition, and increment all in one line inside the for() block. ======
 */

// count = 1;
// for (count; count <= 5; count++) {
//   document.writeln("Hello world <br>");
// }

// for (count = 1; count <= 5; count++) {
//   document.writeln("Hello world <br>");
// }

/* ====== WHILE LOOP: First we initialize, then give a condition inside the while() block, and finally do the increment inside the loop. ====== */

// let i = 1;
// while (i <= 5) {
//   document.writeln("Hello World <br>");
//   i++;
// }

/* ====== DO-WHILE LOOP: Same as while loop, but the code executes once before checking the condition because the condition is checked at the end. ====== */

// let i = 1;
// do {
//   document.writeln("Hello <br>");
//   i++;
// } while (i <= 5);

/* ====== FOR-OF LOOP: Iterates directly over iterable values (like arrays or strings), assigning each value to a variable one by one ====== */

// == String Example ==
// let title = "MeraCollege";

// for (let val of title) {
//   console.log(val);
// }

// == Array Example ==

// let fruits = ["apple", "mango", "kiwi"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

/* ====== FOR-IN LOOP: Iterates over the keys (property names) of an object or indices of an array. ====== */

// let student = {
//   fName: "justin",
//   rollNo: 24,
//   house: "red",
//   grade: "A",
// };

// for (let key in student) {
//   console.log(`key = ${key} & value = ${student[key]}`);
// }
