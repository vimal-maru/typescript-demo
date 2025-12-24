namespace AuthSpace {
  export class Auth {
    login() {
      console.log(`login works`);
    }
  }

  export function getAllRole() {
    console.log(`Lis of roll here`);
  }

  export const apiUrl = "www.google.hihi";
}

let userAuthNameSpace = new AuthSpace.Auth();
userAuthNameSpace.login();

AuthSpace.getAllRole();

AuthSpace.apiUrl;
