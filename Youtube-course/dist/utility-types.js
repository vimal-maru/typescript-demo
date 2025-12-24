"use strict";
// Make Types optional to use
//1. Partial
//2. Required
//3. ReadOnly
//4. Pick
//5. omit
//6. Exclude
//7. Extract
//8. NonNullable
Object.defineProperty(exports, "__esModule", { value: true });
//1. Partical
let CollegeData1 = {
    name: "PIT",
    localtion: "vadodara",
    strudents: 2000,
};
//2. Requuied
let CollegeData2 = {
    name: "PIT",
    localtion: "vadodara",
    strudents: 2000,
    brnach: 30, // need this even it's not require
};
let CollegeData3 = {
    name: "PIT",
    localtion: "vadodara",
    strudents: 2000,
    brnach: 30,
};
// CollegeData3.name ="java"; //CE as it's read only object
//4. pick that mean pick neeed properties only
let CollegeData4 = {
    name: "PIT",
    localtion: "vadodara",
};
//5. omit remove specific properties
let CollegeData5 = {
    name: "PIT",
    localtion: "vadodara",
    strudents: 2000,
};
let APICall;
APICall = "error";
let APIGatewayCall;
APIGatewayCall = "error";
//var randomData: NonNullable<RandomTypes>= null; //EC null or undefined will be extract here
//# sourceMappingURL=utility-types.js.map