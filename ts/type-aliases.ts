// Type Aliases

// A type alias is a way to create a new name for an existing type. It allows you to define a CUSTOM TYPE that refers to another type and give it a more meaningful or descriptive name.
// Type aliases are defined using the TYPE KEYWORD, followed by the name of the alias, an equal sign (=), and the type it refers to.

type MyString = string;

type MacBook = {
  model: string;
  year: number;
};

function printMacBook(macbook: MacBook) {
  console.log(`Model: ${macbook.model}, Year: ${macbook.year}`);
}

const myMacBook: MacBook = { model: "MacBook Pro 13 inch", year: 2022 }

printMacBook(myMacBook);