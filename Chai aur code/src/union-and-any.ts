// Union example : more than one data type or values in variable i.e

let myTypes : String | number | boolean ="100 true Hahaha yes it's possible";

let myAPIResponseStatue : "Pending" | "active" | "error" = "Pending";

myAPIResponseStatue = "active";

// any example

const orders = ["20", "34", "44", "29"];

let currentOrder: string | undefined;

for(let order of orders){

    if(order =="34") {
        currentOrder = order;
        break;
    }
}

 console.log(currentOrder);