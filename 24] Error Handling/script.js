/**
 * Error Handling

    -> It is a way to deal with error so that when things are live because of that one error the whole thing doesn't shut down

    -> syntax:
    
    try{

        ...normal code

    }catch( error ){ //error is object

        ... handling error
    }
        

*/

// In the example we can see that there is a error but the code below will still run. so we just put the line of code which we think can cause error and catch the error

let a = 5;
let b = 10;
console.log(a + b);

try {
  console.log(a + c);
} catch (error) {
  console.log(error);
}

console.log(b + a);
