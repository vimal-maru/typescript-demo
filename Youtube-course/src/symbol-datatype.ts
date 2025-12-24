// this is similar to java string where string reference is same in memory

let str1: Symbol = Symbol("java");
let str2: Symbol = Symbol("java");

console.log(typeof str1); //symbol

if(str1 === str2) {
    //it will not enter here...
    console.log(`both are not same as memory loation is difference`);
}
