// ======================
// 1. PRIMITIVE TYPES
// ======================

// String
const username: string = "Vimal";

// Number (includes both integers and floats)
const age: number = 30;
const price: number = 99.99;

// Boolean
const isLoggedIn: boolean = true;

// ============================
// 2. SPECIAL PRIMITIVE TYPES
// ============================
const value1: null = null;
const value2: undefined = undefined;

// =================
// 3. ARRAY TYPES
// =================
// Using type[] syntax (preferred for simple arrays)
const skills: string[] = ["JavaScript", "TypeScript", "Angular"];

// Using Array<type> syntax (alternative)
const scores: Array<number> = [85, 90, 95];

// =================
// 4. TUPLE
// =================
// Fixed-length array with specific types for each position
const user: [number, string] = [1, "Vimal"];

// =================
// 5. ENUM
// =================
// Defines a set of named constants
enum Status {
  Active,
  Inactive,
  Pending,
}

const currentStatus: Status = Status.Active;

// =================
// 6. ANY
// =================
// Disables type checking (use sparingly)
let data: any = 10;
data = "Hello";
data = true;

// =================
// 7. UNKNOWN
// =================
// Safer alternative to 'any' - requires type checking
let input: unknown = "Text";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// =================
// 8. VOID
// =================
// Used for functions that don't return anything
function logMessage(message: string): void {
  console.log(message);
}

// =================
// 9. NEVER
// =================
// Used for functions that never complete (always throw or loop)
function throwError(message: string): never {
  throw new Error(message);
}

// =================
// 10. OBJECT
// =================
// For non-primitive values
const userInfo: object = {
  id: 1,
  name: "Vimal",
};

// =================
// 11. TYPE ALIAS
// =================
// Creates a reusable type definition
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const admin: User = {
  id: 1,
  name: "Vimal",
  isAdmin: true,
};

// =================
// 12. UNION TYPES
// =================
// Allows a variable to be one of several types
let id: number | string = 101;
id = "A101";

// =================
// 13. LITERAL TYPES
// =================
// Restricts a variable to specific literal values
let direction: "left" | "right" | "up" | "down" = "left";

//14. Function Type

function add(a: number, b: number): number {
  return a + b;
}
