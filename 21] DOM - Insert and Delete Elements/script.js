// // ======================= INSERT ELEMENTS =======================

// -> First we need to create the element

// -> Syntax : let el = document.createElement("div");

// -> node.prepend( el ) // adds at the start of node (inside)

// -> node.append( el ) // adds at the end of node (inside)

// -> node.before( el ) // adds before the node (outside)

// -> node.after( el ) // adds after the node (outside)

// // ----------- Example of Append and Prepend -----------:

let div = document.querySelector("div");
let newBtn = document.createElement("button");
newBtn.innerHTML = "<i> CLICK ME </i>";

// div.prepend(newBtn);

div.append(newBtn);

// div.before(newBtn);

// div.after(newBtn);

newBtn.style.cursor = "pointer";

// // ======================= DELETE ELEMENTS =======================

// -> node.remove() // removes the node

let para = document.querySelector("p");

para.remove();

// // ======================= APPEND & REMOVE CHILD=======================

// -> appendChild() : It adds a new element (child) inside a parent element, usually at the end.

// syntax: parentElement.appendChild(childElement);

// -> removeChild() : It removes a child element from its parent element.

// syntax: parentElement.removeChild(childElement);

let container = document.getElementById("container");

let newPara = document.createElement("p"); // Create a new <p> element
newPara.innerHTML = "<i> This is a new para  </i>";

container.appendChild(newPara); // Add the <p> to the container

// container.removeChild(newPara); // Add the <p> to the container
