// Intersection Types

// An intersection type is a way to COMBINE MULTIPLE TYPES into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted by the & symbol.

type Entrepreneur = {
  name: string;
  age: number;
}

type Employee = {
  id: number;
  title: string;
}

type EntrepreneurAndEmployee = Entrepreneur & Employee;

const alice: EntrepreneurAndEmployee = {
  name: 'Alice',
  age: 36,
  id: 123,
  title: "Business owner"
}