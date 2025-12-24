//object example

let userData: {
  id: number;
  name: string;
  age: number;
};

userData = {
  id: 23,
  name: "jarvis",
  age: 25,
};

console.log(userData.name);

// nested object example

let employeeData: {
  id: number;
  name: string;
  address: {
    street: string;
    state: string;
    country: string;
    postalcode: number;
  };
};

employeeData = {
  id: 1,
  name: "Java",
  address: {
    street: "first street",
    state: "gujarat",
    country: "India",
    postalcode: 343445,
  },
};
