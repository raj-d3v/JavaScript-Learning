// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;



// Example 1

let age = 21;

let message = age >= 18 ? 'You are a Adult' : 'You are a minor';
console.log(message);


// Example 2

let time = 9;

let greeting = time <= 12 ? 'Good Morning' : 'Good Afternoon';
console.log(greeting);


// Example 3 - Boolean

let isStudent = true;

let verify = isStudent ? 'You are a student' : 'You are not a student';
console.log(verify);


// Example 4

let pay = 120;

let discount = pay >= 100 ? 10 : 0;

console.log(`Your Total is $${pay - pay * (discount/100)}`);