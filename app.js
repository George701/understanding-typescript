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
// objects
var userData = {
    name: 'Max',
    age: 27
};
// complex object
var complex = {
    data: [100, 3.39, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.39, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealTrueAge = 27;
myRealTrueAge = '23';
// check types
var finalValue = 'A string';
// typeof finalValue === 'string' && console.log('Final value is a string')
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
