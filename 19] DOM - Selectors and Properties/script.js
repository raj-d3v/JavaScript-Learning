/* ======================== DOM MANIPULATION ================================
 */

// // ========= Selection by ID =========
// let myId = document.getElementById("myId");
// console.dir(myId);

// // ========= Selection by class =========
// let myClass = document.getElementsByClassName("myClass");
// console.dir(myClass);

// // ========= Selection by tag =========
// let myTag = document.getElementsByTagName("p");
// console.dir(myTag);

// // ========= QUERY SELECTOR =========

// // > Inside document we have a method known as query selector.
// // > We can pass any of the three that is id or class or tag

// // Returns only the 1st element
// let firstElement = document.querySelector("p");
// console.log(firstElement);

// // Returns all elements
// let allElements = document.querySelectorAll("p");
// console.dir(allElements);

// // Using class in querySelector single element
// let firstElement = document.querySelector(".myclass");

// // Using class in querySelector all elements
// let allElements = document.querySelectorAll(".myclass");

// // Using Id we can only return single value not all
// let firstElement = document.querySelector("#myId");

// // ========= PROPERTIES =========

// -> tagName : returns tag for element node

// -> innerText : returns the text content of the element and all its childern

// let myText = document.querySelector("#helloJS");

// myText.innerText = myText.innerText + " From D3V ";

// -> innerHTML : returns the plain text or HTML contents in the element

// -> textContent: returns textual content even for hidden elements i.e if we have a div with style visibility: hidden so we can access that as well using textContent
