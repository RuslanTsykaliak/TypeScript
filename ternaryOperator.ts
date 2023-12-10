// ts-node ternaryOperator.ts 

const age: number = 17;
const isAdult: boolean = age >= 18;

const message: string = isAdult ? "You are an adult." : "You are a minor.";

console.log(message); // "You are an adult."
