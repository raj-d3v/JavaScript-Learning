/*
    ========================== Events In JavaScript ========================== 

    -> The change in the state of an object(eg: button) is known as an Event

    -> Events are fired to notify code about "interesting changes" that may affect code execution

    -> Types of events: 
        
        - Mouse events (click, double click, etc...)

        - Keyboard events (keypress, keyup, keydown)

        - Form events (submit, etc...)  

        - Print event & many more ...

    -> Event Object is a special object that has details about the event. 

    -> All event handlers have access to the Event Object's properties and methods.

    -> Event object argument generally we say it 'e' or we can name it anything, Is passed like this: 
    node.event = function (e) { //handle here } 
    // OR arrow function :  
    node.event = (e) => { //handle here }
    e.target :  Where the even is occured
    e.type :    What is the type of the event
    e.clientX : Horizontal position of the event 
    e.clientY : Vertical position of the event

    -> In most cases we use event target or event type and if we want to create example a game where we need position we use event X and event Y

*/

// ======================================== Event Handling ========================================

/*
  -> Can be written in HTML (onclick="...") or in JavaScript (element.onclick = function).
 -> Between inline handle event and JS handle event, the JS handle is prioritised first.

 ❌ Limitation:
    Only one function can be assigned.
    Assigning a new function replaces the previous one.

Example: 
const btn = document.getElementById("myBtn");

btn.onclick = function() {
  console.log("First Handler");
};

btn.onclick = function() {
  console.log("Second Handler");
};
// Only "Second Handler" will run

*/

let myJsBtn = document.getElementById("myJsBtn");

myJsBtn.onclick = function (e) {
  console.log("Hello from JS Button");
  console.log(e);
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
};

// ========================================== Event Listener ======================================

/*
-> Event listeners in JavaScript are used to run a function in response to a specific event (like a click, hover, or keypress) on an HTML element.

-> addEventListener Syntax: element.addEventListener("event", function);

    element – The HTML element to watch.

    "event" – The name of the event (e.g., "click", "mouseover", "keyup").

    function – The callback function to run when the event occurs.
    

-> removeEventListener Syntax: element.removeEventListener("event", function);

    element – The HTML element to stop listening to.

    "event" – The event type (e.g., "click").

    function – The exact same function that was originally added.


-> Example : 
const btn = document.getElementById("myBtn");

btn.addEventListener("click", function() {
  console.log("First Handler");
});

btn.addEventListener("click", function() {
  console.log("Second Handler");
});
// Both handlers will run on click

*/

let eventListenerBtn = document.getElementById("eventListenerBtn");

// ---- ADDING EVENT LISTENER ----

eventListenerBtn.addEventListener("click", function () {
  console.log("Event listener button was clicked - handler 1");
});

const handler2 = function () {
  console.log("Event listener button was clicked -  handler 2");
};

eventListenerBtn.addEventListener("click", handler2);

eventListenerBtn.addEventListener("click", function (e) {
  console.log("Event listener button was clicked -  handler 3");
  console.log(e.type);
  console.log(e.target);
});

// ---- REMOVE EVENT LISTENER ----

// eventListenerBtn.removeEventListener("click", handler2);
