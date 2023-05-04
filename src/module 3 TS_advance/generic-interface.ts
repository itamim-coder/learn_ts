interface CarInterface<T, U = null> {
  name: string;
  properties: T;
  details?: U;
}

interface carProperties {
  size: string;
  update: number;
}
interface carDetails {
  Gear: boolean;
  seat: number;
}

const car: CarInterface<carProperties, carDetails> = {
  name: "Ferrari",
  properties: {
    size: "L",
    update: 2022,
  },
  details: {
    Gear: true,
    seat: 8,
  },
};
