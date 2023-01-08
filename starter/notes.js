"use strict";

/*
-----------S2, S3, S8, S9, S10, S14----------------------

#JS: is a high-level, object-oriented, multi-paradigm programming language.

#JAVASCRIPT is a high-level, prototye-based object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions & a non-blocking event looping concurrency model.


#FUNCTION: is just a piece code that we can re-use over & over again in our code.
-In function-decalration, we can call the function before declaring it
-In function-expression, we cannot call the function before declaring it
-Arrow Function, don't get a 'this' keyword as compared to other functions


#SCOPE: is a space or environment in our code in which a certain variable is declared. Scope of any variable is the region of our code where a certain varaible can be accessed. One varaible only lookup in scope chain, not look-down.

*In Javascript, There are global scope, function scope & block scope.
-Global Scope: Where varaible is declared outside of any function or block. Variables declared in global scope are accessible everywhere. 
-Function Scope: Where variables are accessible only inside the function. Also called local scope.
-Block Scope(ES6): Where variables are accessible only inside the block. However this only applies to let & const variables. Functions are also block scoped only in strict mode.


#CALL STACK: Order in which functions were called. [Scope chain has nothing to do with the order in which functions were called.]

#HOISTING: 

#DIFFERENCE BETWEEN VAR & LET/CONST:
-let & const are blocked scope while var is function scope.
-We can use var-variables before declaration, which gives undefined but in case of let & const it gives error, if use before declaration
-var-variable is created on window while let/const doesn't created on window.

#PRIMITIVES IN JS:
-Number, String, Boolean, Undefined, Null, Symbol, Bigint
- Primitives types stored in call stack
#REFERENCE IN JS:
-Everything else are objects: Array, Function, Object literals
-Reference types stored in heap


#SET:
-Set is just like a array in Javascript but.
-Set is a collection of unique elements. It has no index, no repeated elements. It is iterable.

#MAP:
-Map is just like an object in Javascript which stores data in key:value pair.
-Map is  . It is iterable.

#CLOSURES:
-A closure is the closed variable environment in which a function access to all the variables of its parent function even after the parent function has returned.

#OOP:

#4 FUNDAMENTAL OOP PRINCIPLES:
- ABSTRACTION, ENACPSULATION, INHERITANCE, POLYMORPHISM

*ABSTRACTION-

*ENACAPSULATION- Keeping properties and methods private inside the class. So that they are not accessible from outside the class.

*INHERITANCE- Making all properties and methods of a certain class available to a child class. Inheritance allows us to re-use common logic

*POLYMORPHISM- A child class can overwrite a method it inherited from a parent class.

#NEW OPERATOR IN CONSTRUCTOR FUNCTION:
- 1. New {} is created.
- 2. this refers to {}.
- 3. new {} linked to prototype of constructor function.
- 4. constructor function automatically return new {}.

[Never create method directly on constructor function, use prototype]

#PROTOTYPE CHAIN: A series of links between objects, linked through prototypes. It is similar to scope chain but instead of working with scopes, it works with properties & methods in object.

#CLASS
- 1. Classes are not hoisted
- 2. Class are first class citizen
- 3. Classes are executed in strict mode only
- 4. we can also create method/property from outside class using prototype
- 5. Class can also write in 2 ways: class-declaration & class-expression
    - class expression ex. const Person = class {}
    - class declaration ex. class Person{}
- 6. 'this' keyword is not available on instance method in class.

#ARRAY METHDS
  - SLICE():  Used to get new array based on index numbers. It doesn't change the original array.
  - SPLICE():  Used to replacing elements- removing or adding or both, based on index numbers in the original array.
    .syn: [removeFromIndex, noOfReomovalElements, .....withReplacedElements]

  -MAP(): This method returns a new array based on calculation/operation.
  -FILTER(): This method returns a new array based on condition(true/false).
  -REDUCE(): This method returns a single value based on calculation or condition

  -FIND(): This method returns only 'first-true' 'single-element' based on condition(true/false).
------------------------------------------------------------------------------
#REACT PROJECT SETUP GUIDE
  1. install nodejs
  2. npm install -g create-react-app
  3. To Create New Project: npx create-react-app project1
  4. To start live server: npm start
  5. To install router: npm install react-router-dom


How to install         json-server: npm -g json-server
How to start server    json-server --watch data.json --port 1234

------------------------------------------------------------------------------
                                 DOM
DOM (Document object model): is a structured representation of html documents.
It allows javascript to access html elements & css styles to manipulate them.

DOM is not a part of Javascript. It actually part of something called the web APIs which is like libraries that browser implement and that we can access from our javascript code

------------------------------------------------------------------------------
SHORTCUTS

------------------------------------------------------------------------------
SECTION: [2, 3, (7), 8, 9, 10, 11.1, 14, 17]
        (11.2, 12, 13)
         [15, 16]** [18]**
*/
