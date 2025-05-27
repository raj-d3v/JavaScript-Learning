// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else



// Example 1

let age = 13;

if(age > 18) {
    console.log('You are eligible to enter this website');
}
else{
    console.log('You must be 18+ to enter this website');
}



// Example 2

let time = 9;

if(time < 12){
    console.log('Good Morning!');
}
else{
    console.log('Good Afternoon!')
}



// Example 3 - Using Boolean 

let isStudent = false;

if(isStudent){
    console.log('You are a Student')
}
else{
    console.log('You are not a Student')
}



// Example 4 - Nested IF

let Age = 19;
let hasDrivingLicence = true;

if(Age > 18){

    console.log('You are Eligible to Drive');

    if(hasDrivingLicence){
        console.log('and also you have your license :)')
    }

    else{
        console.log("but you don't have your license :(")
    }
}

else{
    console.log('You must be 18+ to Drive');
}



// Example 5 - Else IF

let yourAge = 180;

if(yourAge >= 100){
    console.log('You are TOO OLD to enter this website');
}

else if(yourAge == 0){
    console.log('You cannot enter. You were just born :) ')
}

else if(yourAge >= 18){
    console.log('You are Eligible to enter this website');
}

else if(yourAge < 0){
    console.log('Your age cannot be below 0');
}

else{
    console.log('You must be 18+ to enter this website');
}










