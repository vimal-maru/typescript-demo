//any example

// let userData: number | string |boolean;

let userData: any;

//unknow example

let value1: string | number = "Jarvis";
value1 = 5001;

//console.log(value1.toUpper()) due to number it can't upper case

let values2: unknown = "jarvis";
values2 = 20;
values2 = "ironmane";

if (typeof values2 === "string") {
  console.log(`I am ${values2}`);
}
