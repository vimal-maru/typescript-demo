//function example-1

function greet(): void {
  console.log(`Hello there`);
}

greet();

//example 2

function returnIt(): string {
  return `Yes return it fast...`;
}

console.log(returnIt());

//example 3 pass perameter and process

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10,20))