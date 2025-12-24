//null example

var nullVal1: null = null;
var emptyString: string = ""; //this is not null it's empty

//console.log(typeof nullVal1); //object

var userName: null | string = null;
var isLogin:boolean = true;

if(isLogin){
    userName = "Jarvis";
}


//undefined example

var val: undefined = undefined; //infuture any kind of values will be defined

var itemName:undefined = undefined;

//console.log(itemName); // undefined

var itemName2: undefined | string = undefined;

//console.log(itemName2); // undefined

itemName2 = "Some values";
//console.log(itemName2); // string
