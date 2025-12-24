"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthSpace;
(function (AuthSpace) {
    class Auth {
        login() {
            console.log(`login works`);
        }
    }
    AuthSpace.Auth = Auth;
    function getAllRole() {
        console.log(`Lis of roll here`);
    }
    AuthSpace.getAllRole = getAllRole;
    AuthSpace.apiUrl = "www.google.hihi";
})(AuthSpace || (AuthSpace = {}));
let userAuthNameSpace = new AuthSpace.Auth();
userAuthNameSpace.login();
AuthSpace.getAllRole();
AuthSpace.apiUrl;
//# sourceMappingURL=namespace.js.map