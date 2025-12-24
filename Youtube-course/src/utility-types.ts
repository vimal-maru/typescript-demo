// Make Types optional to use
//1. Partial
//2. Required
//3. ReadOnly
//4. Pick
//5. omit
//6. Exclude
//7. Extract
//8. NonNullable


interface CollegeType {
  name: string;
  localtion: string;
  strudents: number;
  brnach?: number | undefined;
}

//1. Partical
let CollegeData1: Partial<CollegeType> = {
  name: "PIT",
  localtion: "vadodara",
  strudents: 2000,
};

//2. Requuied

let CollegeData2: Required<CollegeType> = {
  name: "PIT",
  localtion: "vadodara",
  strudents: 2000,
  brnach: 30, // need this even it's not require
};

let CollegeData3: Readonly<CollegeType> = {
  name: "PIT",
  localtion: "vadodara",
  strudents: 2000,
  brnach: 30,
};

// CollegeData3.name ="java"; //CE as it's read only object

//4. pick that mean pick neeed properties only
let CollegeData4: Pick<CollegeType, "name" | "localtion"> = {
  name: "PIT",
  localtion: "vadodara",
};

//5. omit remove specific properties
let CollegeData5: Omit<CollegeType, "branch"> = {
  name: "PIT",
  localtion: "vadodara",
  strudents: 2000,
};

//6. Exclude

type APIStatus = "loading" | "error" | "success" | "pending";

let APICall: Exclude<APIStatus, "loading">;

APICall = "error";
//APICall = "loading"; //CE loading was excluded

//7. Extract

type APIGatewayStatus = "success" | "pending" | "error";

let APIGatewayCall: Extract<APIGatewayStatus, "success" | "error">;

APIGatewayCall = "error";

//8. NonNullable

type RandomTypes = string | number | null | string[];

//var randomData: NonNullable<RandomTypes>= null; //EC null or undefined will be extract here
