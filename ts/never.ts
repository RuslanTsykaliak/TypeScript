// Never

// The never keyword is used to indicate that a funciton will NOT RETRUN ANYTHING, or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.

// A function that always throws an error
function throwError(message: string): never {
  throw new Error(message);
}
  
// A function that has infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// A variable that can never have a value
let x: never;

function neverReturns(): never {
  while (true) {}
}

x = neverReturns();