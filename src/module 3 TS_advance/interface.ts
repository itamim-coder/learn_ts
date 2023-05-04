type user = {
  name: string;
  age: number;
};

type extendedUser = user & {
  role: string;
};

interface Iuser {
  name: string;
  age: number;
}

interface IextendedUser extends Iuser {
  role: string;
}
const User: extendedUser = {
    name: "Omanush",
    age: 2000,
    role: "Unknown",
  };
  const userWithTypeAlias: user = {
    name: "Type Alias",
    age: 100,
  };
  
  const userWithInterface: Iuser = {
    name: "Interface",
    age: 200,
  };
//   userWithInterface.age

type rollNumber = number;

//object function array

type addNumbersType = (num1: number, num2: number) => number;

interface IaddNumbers {
  (num1: number, num2: number): number;
}

const addNumber: IaddNumbers = (num1, num2) => num1 + num2;
type rollNumbersType = number[];

interface IRollNumbers {
  [index: number]: string;
}

const rollNumber: IRollNumbers = ["1", "2"];
