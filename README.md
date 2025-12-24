# TypeScript Installation Guide  
## Global & Project-Specific Setup

This README explains **how to install TypeScript globally** and **how to install it per project**, with exact commands.

---

## Prerequisites

Ensure Node.js and npm are installed.

```bash
node --version
npm --version

```

**1. Install TypeScript Globally**

Step 1: Install TypeScript globally : 
```
npm install -g typescript
```
Step 2: Verify global installation: 
```
tsc --version
```
**2. Install TypeScript Project-Specific (Recommended)**

Step 1: Initialize npm project: 
```
npm init -y
```
Step 2: Install TypeScript as dev dependency : 
```
npm install --save-dev typescript
```
OR (short form): 
```
npm i -D typescript
```
Step 3: Verify local TypeScript: 
```
npx tsc --version
```
Step 4: Create TypeScript configuration: 
```
npx tsc --init
```
This generates: tsconfig.json

**3. Compile and Run TypeScript**
Compile a single file
```
npx tsc index.ts
```
Compile entire project
``
npx tsc
```
Run compiled JavaScript
```
node index.js
```
**4. Optional: Run TypeScript Directly (ts-node)**
```
Install ts-node
npm install --save-dev ts-node
```
Run TypeScript file
npx ts-node index.ts
```

<h2>Data Types In Typescripts </h2>
<hr />

**1. Primitive Types**

**a. string**
```
let username: string = "Vimal";
```

**b. number**
```
let age: number = 30;
let price: number = 99.99;
```
**c. boolean**

```
let isLoggedIn: boolean = true;
```

**2. Special Primitive Types : null and undefined**

```
let value1: null = null;
let value2: undefined = undefined;
```

**3. Array Types : Using type[] or Array<type>**

```
let skills: string[] = ["JavaScript", "TypeScript", "Angular"];
let scores: Array<number> = [85, 90, 95];
```

**4. Tuple: Fixed-length array with fixed types.**

```
let user: [number, string] = [1, "Vimal"];
```

**5. Enum : Used to define a set of named constants.**

```
enum Status {
  Active,
  Inactive,
  Pending,
}

let currentStatus: Status = Status.Active;
```

**6. Any : Disables type checking (use sparingly).**

```
let data: any = 10;
data = "Hello";
data = true;
```

**7. Unknown : Safer alternative to any.**

```
let input: unknown;
input = "Text";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

**8. Void : Used when a function does not return anything.**

```
function logMessage(message: string): void {
  console.log(message);
}
```

**9. Never : Used for functions that never return.**

```
function throwError(message: string): never {
  throw new Error(message);
}
```

**10. Object : For non-primitive values.**

```
let userInfo: object = {
  id: 1,
  name: "Vimal",
};
```

**11. Type Alias : Create custom reusable types.**

```
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let admin: User = {
  id: 1,
  name: "Vimal",
  isAdmin: true,
};
```

**12. Union Type : Allows multiple types.**

```
let id: number | string;
id = 101;
id = "A101";
```

**13. Literal Type : Restricts value to specific literals.**

```
let direction: "left" | "right" | "up" | "down";
direction = "left";
```

**14. Function Type**

```
function add(a: number, b: number): number {
  return a + b;
}
```

<hr />
