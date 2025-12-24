let empData = {
  name: "jarvis",
  id: 123,
  emai: "jarvis@gmail.com",
};

let stdData = {
  name: "tonny",
  id: 1234,
  emai: "tonny@gmail.com",
};

//let's create type for above 2 obejcts

type DataType = { name: string; id: number; email: string };

//now use type

let empl2Data: DataType = {
  name: "stark",
  id: 1235,
  email: "tonny@gmail.com",
};
