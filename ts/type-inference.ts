// Type Inference

// Type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. In other words, if you declare a variable whithout explicitly specifying its type, TypeScript will try to infer the type based on the value you assign to it.

let string = "TypeScript";
let number = 4;
let boolean = true;

console.log(string, number, boolean);


// ERROR
// string = false;
// numbers = "Number"
// boolean = 10;
