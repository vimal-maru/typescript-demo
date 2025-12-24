//no/void return type

function printTea(): void {
  console.log("print tea");
}

//with param no return
function makeTea(type: string, cups: number) {
  console.log(`Making the ${cups} of the ${type}`);
}

console.log(makeTea("Masala", 5));

// with return type
function getTeaPrice(): number {
  return 20;
}

console.log(getTeaPrice());

// with param & return type
function createChai(order: {
  type: string;
  suger: number;
  size: "small" | "large";
}): number {

  return 4;
}
