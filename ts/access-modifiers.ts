// Access Modifiers

// In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

// There are three types of access modifiers in TypeScript:

// Public
// Public: Members marked as public can be accessed from anywhere, both inside and outside the class.

// Private
// Private: Members marked as private can only be accessed from within the class they are defined in.

// Protected
// Protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  private getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    return this.species;
  }

  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies()} and is ${this.age} years old.`;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canine");
  }
}


