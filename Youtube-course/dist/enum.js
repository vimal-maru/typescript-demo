"use strict";
// enum mean create constant
Object.defineProperty(exports, "__esModule", { value: true });
var UserDataResponse;
(function (UserDataResponse) {
    UserDataResponse[UserDataResponse["ACTIVE"] = 0] = "ACTIVE";
    UserDataResponse[UserDataResponse["PENDING"] = 1] = "PENDING";
    UserDataResponse[UserDataResponse["COMPLETED"] = 2] = "COMPLETED";
})(UserDataResponse || (UserDataResponse = {}));
//console.log(typeof UserDataResponse); //object
var UserMapData;
(function (UserMapData) {
    UserMapData["ID"] = "123";
    UserMapData["ROLL"] = "Admin";
})(UserMapData || (UserMapData = {}));
let printUserId = UserMapData.ID;
console.log(printUserId);
//# sourceMappingURL=enum.js.map