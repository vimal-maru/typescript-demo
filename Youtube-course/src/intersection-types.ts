//use type keyword to create types intersection mean combine two times as AND  and unioon is OR

type userType = { name: string; id: number };

let userData: userType;

//userData = { name: "jarvis"}; //error need both param

//userData = { id: 232 }; //error need both param

userData = { name: "jarvis", id: 232 };

interface A {
  name: string;
}
interface B {
  age: number;
}

type c = A & B;

let printCuser: c = {
  name: "java",
  age: 22,
};
