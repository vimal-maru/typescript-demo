type resultTypeDate = {
  name: string;
  age: number;
};

function callMeFirst(): Promise<resultTypeDate> {
  return new Promise((resolved) => {
    setTimeout(() => {
      resolved({
        name: "java",
        age: 25,
      });
    }, 2000);
  });
}

callMeFirst().then((data: resultTypeDate) => {
  console.log(data);
});
