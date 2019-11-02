// string
let myName: string = 'George';

// number
// No matter int or float
let myAge: number = 23;

// boolean
let hasHobbies: boolean = true;

// assign types
let myRealAge: number;
myRealAge = 23;

// array
let hobbies: any[] = ['programming', 'cooking'];
// console.log(typeof hobbies); // object
// console.log(hobbies[0]);

// tuples
let address: [string, number] = ['Superstreet', 99];

// enum
enum Color {
    Gray = '#616161', // 0
    Green = '#43a047', // 1
    Blue = '#1976d2' // 2
}

let myColor: Color = Color.Green;
// console.log(myColor);

// any
let car: any = 'BMW';
car = { brand: 'BMW', series: 3 };

// functions
function returnMyName(): string {
    return myName;
}

// console.log(returnMyName());

// void
function sayHello(): void {
    console.log('Hello!');
}

// argument types
function multiply(x: number, y: number): number {
    return x * y;
};
// console.log(multiply(2, 6));

// function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
myMultiply = multiply;