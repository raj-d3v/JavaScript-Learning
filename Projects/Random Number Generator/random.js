// Random number generator

const roll = document.getElementById('roll');
const myLabel = document.getElementById('myLabel');

const min = 1;
const max = 6;

let randomNum;


roll.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}
