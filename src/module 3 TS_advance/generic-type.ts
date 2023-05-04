type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ["imtiaz", "kate"];

interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const realtionwithsalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: "Imtiaz",
    salary: 100,
  },
  "alone",
];

type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [44];
const rollNumbers2: GenericArray<string> = ["44"];
const rollNumbers3: GenericArray<boolean> = [true];

interface name_roll {
  name: string;
  roll: number;
}

const studentsRandN: GenericArray<name_roll> = [
  {
    name: "aks",
    roll: 12,
  },
  {
    name: "sdd",
    roll: 122,
  },
];
