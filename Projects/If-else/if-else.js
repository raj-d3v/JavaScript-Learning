const ageBox = document.getElementById('ageBox');
const mySubmit = document.getElementById('mySubmit');
const result = document.getElementById('result');
let age;

mySubmit.onclick = function(){

    age = ageBox.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = `You are TOO OLD to enter this website`;
    }
    
    else if(age == 0){
        result.textContent = `You cannot enter. You were just born :)`;
    }
    
    else if(age >= 18){
        result.textContent = `You are Eligible to enter this website`;
    }
    
    else if(age < 0){
        result.textContent = `Your age cannot be below 0`;
    }
    
    else{
        result.textContent = `You must be 18+ to enter this website`
    }
}


