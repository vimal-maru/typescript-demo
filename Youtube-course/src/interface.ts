interface Employee {
  id: number;
  name: string;
  address: string;

  addDetails(): void;
}

class EmployeeOne implements Employee {
  id = 20;
  name = "jarvis";
  address = "test address";

  addDetails(): void {
    console.log("add details of employee");
  }
}
