const userType: string[] = ["user", "admin"];
const paymentMode: string[] = ["Gpay", "phonePay", "UPI"];

console.log(userType[1]);

console.log(paymentMode);

//other way to declare array
const ratting: Array<number> = [10, 22, 26, 63];

//array of objects

type User = {
  name: string;
  id: number;
};

const userArr: User[] = [
  { name: "vimal", id: 11 },
  { name: "java", id: 1 },
];

//readonly value in array

const cities: readonly string[] = ["Ahmedabad", "Gandhinagar", "surat"];
// cities.push('Java')

//multi dimantonal Array

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//2. Tuple : ordered type arrey is == tuple--------------------------------------------------------------------------

let myArray: [string, number];

myArray = ["Java", 25];
// myArray = [25,"java"]; // CE as order must be same as defination

let userInfo: [string, number, boolean?];

userInfo = ["Jarvis", 25];
userInfo = ["Jarvis", 25, true];

//read only tuple

const location: readonly [number, number] = [25.36, 36.4];

//3. ENUM : create constant in app--------------------------------------------------------------------------

enum TshirtSize {
  SMALL,
  MEDIUM,
  Larger,
}

const myTshirtSize = TshirtSize.MEDIUM;

enum ChaiType {
  MASALA = "masala",
  GINJER = "jinger",
}

function makeCHai(type: ChaiType) {
  console.log(`Making tea of tye ${ChaiType}`);
}

console.log(makeCHai(ChaiType.GINJER));
