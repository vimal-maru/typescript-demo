// enum mean create constant

enum UserDataResponse {
  ACTIVE,
  PENDING,
  COMPLETED,
}

//console.log(typeof UserDataResponse); //object

enum UserMapData {
    ID = "123",
    ROLL = "Admin"
}

let printUserId = UserMapData.ID;
console.log(printUserId);

