// Arrays Types

// Arrays are a type of object that can store multiple values of the SAME DATA type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.


// 2 Types Of Arrays

// Using the square bracket notation [] to indicate an array of a specific type
const numbers: number[] = [1, 2, 3, 4];
numbers.unshift(0)


// Using the generic Array<type> notation to indicate an array of a specific type
const languages: Array<string> = ["TypeScript", "JavaScript", "PHP", "Python"]
languages.push("C#")

console.log(numbers, languages);
