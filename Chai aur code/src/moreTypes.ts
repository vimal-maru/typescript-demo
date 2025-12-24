//force full type assestion using "as XYZ-type"

let response:any = "43";

let numericLength:number = (response as string).length;

type Book = {
    name: string
}

let bookString = '{"name":"miracle morning"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

//const inputElement = document.getElementById("userNmae") as HTMLInputElement;

// any vs unknown
let originalValues:any;
originalValues= [1,2,3];
originalValues ="vimal";
originalValues = 2.5;

console.log(originalValues.toUpperCase()); //This is runtime error to fix this we are going to use the unknow

let newValues: unknown;

newValues = "vimal";
newValues = 32;

//console.log(newValues.toUpperCase); // this is CE so need to fix this before production

if(typeof newValues === "string"){
    console.log(newValues.toUpperCase);
}


//another example of any vs unknown

//1. with any type
try {

}catch(error:any) {
    console.log(error);
}

//refectore code

try {

}catch(error){
    if(error instanceof Error){
        console.log(error)
    }

    console.log(error, Error);
}


//never datatype

type Role = "admin" | "user" | "superadmin";

function redirectTheUser(role: Role) : void {
    if(role === "admin") {
        console.log("redirect to admin dashboard");
        return;
    }

    if(role === "user") {
        console.log("redirect to user dashboard");
        return;
    }

    role; //remaing roll is never on hover it
}

