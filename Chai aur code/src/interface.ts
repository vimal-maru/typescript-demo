type ChaiOrder = {
  type: string;
  sugger: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

interface TeaRecipe {
    water:number;
    milk:number
}

class MasalaChai implements TeaRecipe {
    milk: number = 100;
    water: number = 20;
}

