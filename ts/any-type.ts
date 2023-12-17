// Any Type

// TypeScript has a special any type that can be used to represent any type. When a variable is annotated with the any type, TypeScript will allow it to have any value and disable all type checking for that variable and its properties.

// WARNING

// While the any type can be useful in certain situations, it should be used sparingly. Overuse of any can lead to untyped code and make it harder to catch type-related bugs during development. It's generally better to use more specific types whenever possible to get benefits of TypeScript type cheking.

let any: any = "purple";
any = 10;
any = true;

// error message
// any();
// any.toUpperCase();

console.log(any);


// Regular function
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow function Annotations
const multiply = (x: number, y: number) => x * y;
const res = multiply(2, 10)
console.log(res);


// Default Params Value
function greet(person: string = "Name") {
  return `Hello ${person}`;
} 

const hello = greet("Roman");
console.log(hello);
