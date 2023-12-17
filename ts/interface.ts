// Interface

// Interface is a way to define a CONTRACT for the shape of an object. It specifies the properties and thier types that an object must have. Interfaces are a powerful tool for enforcing a certain structure in your code.

// Interface definition
interface NewPerson {
  readonly firstName: string;
  lastName: string;
  age?: number;
}

// Usage
const examplePerson: NewPerson = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
};


// While interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can aslo be used to DESCRIBE THE SHAPE of functions and classes.


// Interface for Functions
interface MathOperation {
  (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(4, 3));
console.log(subtract(7, 3));


// Interface for a class
interface Vehicle {
  start(): void;
  stop(): void;
}

// Class implementing the interface
class Car implements Vehicle {
  start() {
    console.log("Car started");
  }

  stop() {
    console.log("Car stopped");
  }
}

// Usage
const myCar = new Car();
myCar.start();
myCar.stop();

// Song example
interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Natural",
  singerName: "Imagine Dragons",
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, Singer: ${singerName}`;
  },
};


// Declaration merging

// Once an interface is declared, it cannot be directly modified. However, TypeScript allows what is informally referred to as "declaration merging" or "interface extension," which is often misconstrued as "re-opening."

// Declaration merging in TypeScript refers to the ability to extend or augment an existing declaration, including interfaces. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration.