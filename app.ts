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

// objects
let userData: { name: string, age: number } = {
    name: 'Max',
    age: 27
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.39, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// type alias (custom types)
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.39, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// union types
let myRealTrueAge: number | string = 27;
myRealTrueAge = '23';

// check types
let finalValue = 'A string';
// typeof finalValue === 'string' && console.log('Final value is a string')

// never
function neverReturns(): never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;