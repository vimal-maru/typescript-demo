//Array examples

var userArr: string[] = ["java", "javascript"];

for (let user in userArr) {
  //console.log(userArr[user]);
}


//example 2
var studentMarks: Array<Number> = [35, 37, 39, 44];

//add 49 at last
studentMarks.push(49);

//remove last element
studentMarks.pop();

for(let studetMark in studentMarks) {
   // console.log(studentMarks[studetMark]);
}


//example 3 : readonly arry
var studentSubjects: ReadonlyArray<Number> = [31, 35, 37, 39, 44];
//studentSubjects.push(33); //CE not allowd in readonly

//Tuple examples

let userData: [string, number] = ["java", 2025];

console.log(userData[1]);

let studebtData: [number, string, boolean] =[121, "jarvis", true];

console.log(typeof studebtData); // obeject