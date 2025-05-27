// variable = A container that stores a value.
//            Behaves as if it were the value it contains.
// variables cannont have the same name

// 1. declaration let x;
// 2. assignment x = 100;



/* --------- DATA-TYPES --------- */ 

// 1] NUMBERS

let age = 25;
let price = 10.99;
let gpa = 8.3;

console.log(`My age is ${age} years old`);
console.log(`Price of the video game I like $${price}`);
console.log(`My current GPA is ${gpa}`);

console.log(typeof(age))


// 2] STRINGS

let firstName = 'John'
let favFood = 'Pizza'
let email = 'john@gmail.com'

console.log(`First Name : ${firstName}`)
console.log(`${firstName} likes ${favFood}`)
console.log(`${firstName} email is ${email}`)

console.log(typeof(firstName))


// 3] BOOLEAN (TRUE OR FALSE)

let online = false;
let forsale = true;
let isStudent = true;

console.log(`${firstName} is online:  ${online}`)
console.log(`Is this Car for sale:  ${forsale}`)
console.log(`Enrolled:  ${isStudent}`)

console.log(typeof(online))


// OUTPUT ON HTML PAGE
let fullName = 'Raj Patel'
let myAge = 23;
let student = true;


document.getElementById('p1').textContent = `My Name is ${fullName}`;
document.getElementById('p2').textContent = `My Age is ${myAge}`;
document.getElementById('p3').textContent = `Student Enrolled : ${student}`;