//Generics Example 1

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("java");
wrapInArray(121);
wrapInArray(true);

//example 2

function pairOfElement<A,B>(a:A, b:B) : [A,B] {
    return [a,b];
}

pairOfElement("test string", 200);
pairOfElement("java", {falvour:"strong"});

//exampe 3 interface

interface Box<T> {
    content: T
}

const stringBox : Box<string> = {content:"java"}
const numberBox : Box<number> = {content:222}

