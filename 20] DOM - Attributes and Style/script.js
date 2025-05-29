// // ========= ATTRIBUTES =========

// -> Attributes are something that we write inside a tag like id, class, etc

// -> getAttribute( attr ) // to get the attribute value

// -> setAttribute( attr, value ) // to set the attribute value

// Example :

let div = document.querySelector("div");

let id = div.getAttribute("id");
console.log(id);

let newId = div.setAttribute("id", "newBox");

// // ========= STYLE (CSS MAIPULATION) =========

// -> node.style helps us to change the style of the element

// let div = document.querySelector("div");

// div.style.backgroundColor = "cyan";
// div.style.color = "black";

/*========= Exercise: =========
    -> Create a <p> tag in HTML, give it a class & some styling.

    -> Now create a new class in CSS and try to append this class to the <p> element using JavaScript.

    -> Use classList
*/

// -> We can use getAttribute() to get the attributes inside the tag

// -> However to add a new class we cannot use setAttribute() because it will overwrite the exisiting class we want to add a new one

// -> So, we will use a new method knwon as classlist.add("className")

// -> We can also use classList.remove("className") to delete the class

let myPara = document.querySelector("p");

myPara.getAttribute("class");

myPara.classList.add("myNewPara");
// myPara.classList.remove("myNewPara");
