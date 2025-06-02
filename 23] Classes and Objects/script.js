/*
  ------------------------------------ Objects ------------------------------------
    
    -> A javaScript object is an entity having state and behaviour (properties and method)

    -> It is a collection of key: value pair

    -> Two ways to create objects 1] prototype 2] classes  

    -> 'this' is used inside an object and
    it allows access to the object's properties. without using this we cannot access property of the object inside it  

*/

// // Example of creating a object and also 'this' keyword

// const student = {
//   name: "Justin",
//   marks: 90,
//   printMarks: function () {
//     console.log("marks = ", this.marks);
//   },
// };

/* -------------------------------- ProtoType in Object ---------------------------------

    -> Whenever we create a object we can see a special property 'prototype' is created automatically. To check we can conosle.log(objectName) in the console window and see we have prototype.

    -> Prototype are collection of predefined methods and properties.
    example: array.push()
    so because array is a object it also has prototype and from there we get the push() 

    -> Prototype itself is a object which has its own special properties and methods

    -> ** IF OBJECT & PROTOTYPE HAVE SAME METHOD, OBJECT'S METHOD WILL BE USED

    ->  We can set prototype using __proto__ . 

*/

// // Example of creating our own prototype

const employee = {
  // like this also we can write function inside object
  calcTax() {
    console.log("tax rate is 10%");
  },

  // // OR

  // calcTax1: function () {
  //   console.log("tax rate is 10%");
  // },
};

const justin = {
  salary: "₹50000",
  // Here we have defined the same method as our prototype so if both methods are same the method inside object will execute not prototype
  calcTax() {
    console.log("tax rate is 15%");
  },
};

const zayn = {
  salary: "₹30000",
};

// Set the prototype of 'justin' to 'employee' so it can inherit its methods/functions

justin.__proto__ = employee;
zayn.__proto__ = employee;

/* -------------------------------- Classes in Object ---------------------------------

  -> Class is a program-code template for creating multiple objects

  -> Those objects will have some state (variables) & some behaviour (functions) inside it 

  let myObj = new Myclass(); // creating a new object from class

*/

class Car {
  // In this we can see we dont need to use a ',' to seperate functions if automatically knows there are two seperate functions

  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

let bmw = new Car();

/* =========== Constructor in JS ===========

  -> constructor() : is a special method which automatically invoked when we create a 'new' object.

  -> when we use new it start searching for constructor in a class and if it is not there it is created automatically

  -> syntax:

    class Myclass{

      constructor() {...}
    
      myMethod() {....}
    }

*/

// // Example of Constructor

class FerrariCar {
  constructor(brand, mileage) {
    console.log("Creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
}

let laFerrari = new FerrariCar("Ferrai", "20"); // constructor
console.log(laFerrari);

/* =========== Inheritance in JS ===========
    
  -> Inheritance is passing down properties & methods from parent class to child class
  
  -> syntax:

    class Parent {
    
    }

    class Child extends Parent {
    
    }

  -> If Child & Parent have same method, child's method will be used. [Method Overridding]

*/

// // ---- Basic Example ----

class Parent {
  hello() {
    console.log("Hello");
  }
}

class Child extends Parent {}

let newObj = new Child();

// // ---- Real world example ----

class Person {
  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }
}

class Engineer extends Person {
  design() {
    console.log("Design");
  }

  develop() {
    console.log("Develop");
  }
}

class Doctor extends Person {
  surgery() {
    console.log("Do the surgery");
  }
}

let john = new Engineer();
let docJohn = new Doctor();

/**
 ===== super Keyword =====

  -> The super keyword is used to call constructor of its parent class to access the parent's properties and methods

  -> syntax: 
  
  super(argument) // calls Parent's constructor

  super.parentMethod( args );

*/

class School {
  constructor() {
    this.name = "St. Xavier's";
  }

  uniform() {
    console.log("Formal");
  }
}

class Teacher extends School {
  constructor(subject) {
    super(); // to invoke parent class constructor
    this.subject = subject;
  }

  teach() {
    console.log("Teach");
  }
}

let teacherObj = new Teacher("English");
