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

Step 1: Install TypeScript globally : npm install -g typescript
Step 2: Verify global installation: tsc --version

**2. Install TypeScript Project-Specific (Recommended)**

Step 1: Initialize npm project: npm init -y

Step 2: Install TypeScript as dev dependency : npm install --save-dev typescript

OR (short form): npm i -D typescript

Step 3: Verify local TypeScript: npx tsc --version

Step 4: Create TypeScript configuration: npx tsc --init

This generates: tsconfig.json

**3. Compile and Run TypeScript**
Compile a single file
npx tsc index.ts

Compile entire project
npx tsc

Run compiled JavaScript
node index.js

**4. Optional: Run TypeScript Directly (ts-node)**
Install ts-node
npm install --save-dev ts-node

Run TypeScript file
npx ts-node index.ts
