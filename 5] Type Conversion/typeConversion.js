// type conversion = change the datatype of a value to another
//                  (strings, numbers, booleans)



// let age = window.prompt('Enter you age: ');

// console.log(typeof(age));
// age = Number(age);
// age += 1;
// console.log(typeof(age));

// console.log('Happy Birthday !! You are', age, 'years old');


let v = Number('Pizza')      // reutrns NaN (not a number)
let w = Number('7');
let x = String(7);
let y = Boolean('');         // empty string returns False
let z = Boolean('Pizza');   // string returns True


console.log(v, typeof v);
console.log(w, typeof w);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
