//1. clas & object

class User {
  userId: number;
  userName: string;
  useremail: string;

  constructor(id: number, name: string, email: string) {
    this.userId = id;
    this.userName = name;
    this.useremail = email;
  }
}

const user = new User(101, "java", "java@gmail.com");

console.log(user);

//2. Access modifier public private protected

class Employee {
  private id: number = 123;

  public name: string = "java";

  protected email: string = "java@gmail.com";
}

//3. Gatter & satter

class Donation {
  private id: number;
  private name: string;
  private address: string;
  private amount: number;

  constructor(id: number, name: string, adress: string, amount: number) {
    this.id = id;
    this.name = name;
    this.address = adress;
    this.amount = amount;
  }

  public getId(): number {
    return this.id;
  }

  public seId(id: number): void {
    this.id = id;
  }
}

//4. static member

class StaticDemo {
  //static variabvle
  static userId: number = 101;

  //static method
  static getUserDetails(): string {
    return `This is more details about ser...`;
  }
}

console.log(StaticDemo.userId); // directly acess usinf class name

//5. abstratc class

abstract class Drink {
  abstract make(): void;
}

class Water extends Drink {
  make(): void {
    console.log("drink more water every day");
  }
}


//5. other OOPs concepts are same as Javascript or Java