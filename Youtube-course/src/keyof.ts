type PersonT = {
  name: string;
  id: number;
  isActive: boolean;
};

let personData: PersonT = {
  name: "java",
  id: 24,
  isActive: true,
};

let personXData : keyof PersonT;

personXData = "name";
personXData = "id"
personXData = "isActive";

let UserX: keyof typeof personData = "name";