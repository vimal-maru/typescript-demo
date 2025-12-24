//hover below element it will show like html | null
//let accesssH1Tag = document.querySelector('h1');

//add ! to make sure this will not null in dom
let accesssH1Tag = document.querySelector("h1")!;
console.log(accesssH1Tag?.classList);