// Unions

// Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept MULTIPLE TYPES.

// The syntax for defining a union type in TypeScript uses the pipe symbol (|).


// For example, if we want to define a variable that can be either a number or a string, we would write:

let myVariable: number | string;

// We can also use unions with function parameters. For example, if we have a function that accepts either a string or an array of strings, we could define its parameter like this:

function myFunction(param: string | string[]) {
  // A function
}

// Unions can also be combined with other types in TypeScript, such as interfaces and classes. For example, we could define an interface that has a property that can be either a string or a number:

interface Myinterface {
  myProperty: string | number;
}

/////
let password: string | number = 20;

type UserInfo = {
  first: string;
  last: string;
  age: number;
}

type AccountDetails = {
  email: string;
  password: string;
}

let FirstUser: UserInfo | AccountDetails = {
  first: 'Ruslan',
  last: 'Tsykaliak',
  age: 26,
}

let SecondUser: UserInfo | AccountDetails = {
  email: 'ruslantsykaliak@gmail.com',
  password: 'password1',
}

const items: (number | string)[] = [1,5,6,7, 'hello world']

console.log(items);
