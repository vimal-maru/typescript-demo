function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }

  return `Chai order number is ${kind}`;
}

console.log(getChai(3));

console.log(getChai("masala"));

function willwontTheToss(mayBe?: string) {
  if (mayBe) {
    return `we wo the toss ${mayBe}`;
  }

  return `We loss the toss this time`;
}

console.log(willwontTheToss());

function checkTheShirtSize(size: "small" | "medium" | "Large" | 40) {
  if (size === "small") {
    return `It is small size shirt`;
  }

  if (size === "Large" || size === "medium") {
    return `It is Medium or large size shirt`;
  }

  return `it's size no ${size}`;
}

console.log(checkTheShirtSize(40));
console.log(checkTheShirtSize("small"));

class KulhadChai {
  serve() {
    return `It's Kulhad chai`;
  }
}

class CuttingChai {
  serve() {
    return `It's Cutting chai`;
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }

  // this will be Cutting chai
  return chai.serve();
}

// Create instances
const kulhad = new KulhadChai();
const cutting = new CuttingChai();

console.log(serve(kulhad));
console.log(serve(cutting));

// Making our custom type

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isTypeOrder(obj: any): obj is ChaiOrder {
  return (
    obj != null &&
    typeof obj === "object" &&
    typeof obj.type === "string" &&
    obj.sugar === "number"
  );
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };

type Chai =  MasalaChai | GingerChai;


function MakingChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `It is a masala chai`
                    
        case "ginger":
            return `It is a ginger chai`;
    }
}