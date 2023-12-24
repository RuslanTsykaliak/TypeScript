// Generics

// In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different types without having to duplicate code.

// Regular Functions
const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);

console.log(printString("hello world"));
console.log(printNumber(36));
console.log(printBoolean(true));


// Generic Function
function printInfo<T>(x: T): T {
  return x;
}

const str = printInfo<string>('hello world');
const num = printInfo<number>(14);
const bool = printInfo<boolean>(true);


function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)]
  
  return {key: randomKey, value: obj[randomKey]}
}

const stringObject = {a: 'apple', b: 'banana', c: 'cherry', d: 'donut'}
const randomString = getRandomKeyValuePair<string>(stringObject)
console.log(randomString);


const numberObject = {one: 1, two: 2, three: 3, four: 4}
const randomNumber = getRandomKeyValuePair<number>(numberObject)
console.log(randomNumber);