// Objects

// An object in TypeScript is structured data type tht represents a collection of properties, each with a key and an associated value. The properties of an object can have SPECIFIC TYPES, and the object itself can be annotated with a type, oftern defined using an interface or a type alieas. TypeScript uses structural typing, meaning that the shape of an object (its structure or properies) is wht matters for type compatibility.

// type varName (annotations/type) = {property: value}

const person: { firstName: string; lastName: string; age: number} = {
  firstName: 'Ruslan',
  lastName: 'Tsykaliak',
  age: 26,
}

console.log(person);
console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);



// Objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: 'Roman',
    age: 33,
    location: 'Ukrain',
  }
}

const user = printUser();
console.log(user);
