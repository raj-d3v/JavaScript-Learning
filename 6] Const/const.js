// const = a variable that can't be changed
// const is basically used for security measures because it cannot be re-initalize

const pi = 3.14159;
let radius;
let circumference;


document.getElementById('mySubmit').onclick = function(){
    radius = document.getElementById('myText').value;
    radius = Number(radius);    
    circumference = 2 * pi * radius;
    document.getElementById('myH3').textContent = 'Cirumference of a Circle is ' + circumference + ' cm'
}