"use strict";
//Array examples
Object.defineProperty(exports, "__esModule", { value: true });
var userArr = ["java", "javascript"];
for (let user in userArr) {
    //console.log(userArr[user]);
}
//example 2
var studentMarks = [35, 37, 39, 44];
//add 49 at last
studentMarks.push(49);
//remove last element
studentMarks.pop();
for (let studetMark in studentMarks) {
    // console.log(studentMarks[studetMark]);
}
//example 3 : readonly arry
var studentSubjects = [31, 35, 37, 39, 44];
//studentSubjects.push(33); //CE not allowd in readonly
//Tuple examples
let userData = ["java", 2025];
console.log(userData[1]);
let studebtData = [121, "jarvis", true];
console.log(typeof studebtData); // obeject
//# sourceMappingURL=array-tuple.js.map