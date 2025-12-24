//1. Interface

//example 1
interface TeaRecipe {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  milk: number = 100;
  water: number = 20;
}

//example 2
interface car {
  start(): void;
  driveMe(): void;
  stop(): void;
}

class Tata implements car {
  start(): void {
    console.log("Started....");
  }
  driveMe(): void {
    console.log("more speed....");
  }
  stop(): void {
    console.log("Stopedd....");
  }
}

//example 3

interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = {
  name: "Java",
  age: 22,
}

//example 4 extend interface

interface A{
    a:string;
}

interface B{
    b:string;
}

interface C extends A, B{}

