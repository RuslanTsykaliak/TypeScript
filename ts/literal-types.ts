// Literal Types

// Literal types allow you to specify a value that can only be ONE SPECIFIC LITERAL VALUE. This means that a variable with a literal type can only have one specific value and no other.


// string literal types
let color: "red" | "green" | "blue";
color = "red"; // valid
color = "yellow"; // invalid

// numberical literal types
let number: 1 | 2 | 3;
number = 1; // valid
number = 4; // invalid

// boolean literal types
let isTrue: true;
isTrue = true; // valid
isTrue = false; // invalid