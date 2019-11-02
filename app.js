"use strict";
// string
var myName = 'George';
// number
// No matter int or float
var myAge = 23;
// boolean
var hasHobbies = true;
// assign types
var myRealAge;
myRealAge = 23;
// array
var hobbies = ['programming', 'cooking'];
// console.log(typeof hobbies); // object
// console.log(hobbies[0]);
// tuples
var address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color["Gray"] = "#616161";
    Color["Green"] = "#43a047";
    Color["Blue"] = "#1976d2"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
// console.log(myColor);
// any
var car = 'BMW';
car = { brand: 'BMW', series: 3 };
// functions
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(x, y) {
    return x * y;
}
;
// console.log(multiply(2, 6));
// function types
var myMultiply;
// myMultiply = sayHello;
myMultiply = multiply;
