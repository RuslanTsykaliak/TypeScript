// Optional Properties

// You can make a certain property optional in an object type by adding a question mark (?) after the property name.

// For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question mark (?) after the email property:

type Person = {
  name: string;
  readonly age: number;
  email?: string;
};

// Now, when you create an object of type Person, you can choose whether or not to include the email property.

const Julia: Person = { name: 'Julia', age: 24 };
const Mykhail: Person = { name: 'Mykhail', age: 40, email: 'mykhail@gmail.com' };

// In this example, the Julia object does not include the email property, while the Mykhail object includes the email property. Because the email property is marked as optional in the Person type definition, it is valid to create objects with or without email properties.