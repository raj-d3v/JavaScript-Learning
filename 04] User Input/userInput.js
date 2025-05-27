// How to accept User Input

// Easy Method with a window prompt 

// let username = window.prompt('Whats your name')
// console.log(username)


// Hard Method HTML textbox

let username;

document.getElementById('myButton').onclick = function(){
    username = document.getElementById('myText').value;
    // document.getElementById('display').textContent = username;
    document.getElementById('yourName').innerHTML = 'Hello ' +  username;
    console.log(username)
}