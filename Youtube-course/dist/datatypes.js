"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1. Primitive Types
// string
let username = "Vimal";
// number
let age = 30;
let price = 99.99;
//boolean
let isLoggedIn = true;
//2. Special Primitive Types
//null and undefined
let value1 = null;
let value2 = undefined;
//3. Array Types
//Using type[]
let skills = ["JavaScript", "TypeScript", "Angular"];
//Using Array<type>
let scores = [85, 90, 95];
//4. Tuple
//Fixed-length array with fixed types.
let user = [1, "Vimal"];
//5. Enum : Used to define a set of named constants.
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
let currentStatus = Status.Active;
//6. Any : Disables type checking (use sparingly).
let data = 10;
data = "Hello";
data = true;
//7. Unknown : Safer alternative to any.
let input;
input = "Text";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
//8. Void : Used when a function does not return anything.
function logMessage(message) {
    console.log(message);
}
// 9. Never : Used for functions that never return.
function throwError(message) {
    throw new Error(message);
}
//10. Object : For non-primitive values.
let userInfo = {
    id: 1,
    name: "Vimal",
};
let admin = {
    id: 1,
    name: "Vimal",
    isAdmin: true,
};
//12. Union Type : Allows multiple types.
let id;
id = 101;
id = "A101";
//13. Literal Type : Restricts value to specific literals.
let direction;
direction = "left";
//14. Function Type
function add(a, b) {
    return a + b;
}
//# sourceMappingURL=datatypes.js.map