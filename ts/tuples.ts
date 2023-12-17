// Tuples

// Tuple is a type that represents an array with a FIXED NUMBER OF ELEMENTS, where each element can have a different type. The order of the types in the tuple definition corresponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.

let myTuple: [string, number] = ["hello", 4];
console.log(myTuple[0]); // "hello"
console.log(myTuple[1]); // 4

// Destructuring Individual Element
let [first, second] = myTuple;
console.log(first); // "hello"
console.log(second); // 4

const languages: [string, string, string] = [ "TypeScript", "JavaScript", "PHP"];
console.log(languages);
