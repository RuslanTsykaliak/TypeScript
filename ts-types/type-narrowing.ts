// Type Narrowing

// Type narrowing is the process of refining a variable's within a conditional block of code. This allows you to write more precise and type-safe code.

// TypeScript provides several mechanism for narrowing types:

// Type guards
// Type guards are mechanisms that help TypeScript understand and narrow down the types more precisely. One common type guard is the typeof operator.
// Define a union type
type MyType = string | number;

// Example function with type guard
function exampleFunction(value: MyType): void {
  // Type guard using typeof
  if (typeof value === "string") {
    // Within this block, TypeScrip knows that 'value' is a string
    console.log(value.toUpperCase());
  } else {
    // Within this block, TypeScrip knows that 'value' is a number
    console.log(value.toFixed(2));
  }
}

// Example
exampleFunction('hello world') // Output: HELLO WORLD
exampleFunction(42) // Output: 42.00


// The instanceof operator
// The instanceof operator is another type guard in TypeScript tht allows you to check whether an object is an instance of a particular class or constructor function.
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

// Example function with instanceof type guard
function animalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    // Within this block, TypeScript knows that 'animal' is an instance of Dog
    animal.bark();
  } else {
    // Within this block, TypeScript knows that 'animal' is an instance of Cat
    animal.meow();
  }
}

// Example usage
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Output: Woof!
animalSound(myCat); // Output: Meow!

// Intersection types
// Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the & operator.
// Define two types
type Manager = {
  department: string;
  role: string;
}

type Employee = {
  id: number;
  name: string;
}

// Create an intersection type
type ManagerWithEmployeeInfo = Manager & Employee;

// Example usage
const manager: ManagerWithEmployeeInfo = {
  id: 201,
  name: 'Ruslan',
  department: 'Engineering',
  role: 'Team Leader',
}

console.log(manager.id); // Output: 201
console.log(manager.name); // Output: Ruslan
console.log(manager.department); // Output: Engineering
console.log(manager.role); // Output: Team Leader



// Discriminated unions