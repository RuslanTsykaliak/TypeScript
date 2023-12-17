// Void In TypeScript

// Void is a type that represents the absence of any value. It is often used as the return type for functions that do not return a value.

function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
  // ERROR
  // return message;
}

printMessage("Hello How Are You?")