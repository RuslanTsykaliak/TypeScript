// Class Properties Annotations

// You can annotate class properties with a type. This allows you to define the data of the property and ensure that it is always consistent.

class Phone {
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

const iPhone = new Phone("iPhone 15 Pro Max", 2023);
console.log(iPhone);
