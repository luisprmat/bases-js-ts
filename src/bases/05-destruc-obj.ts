interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

export const person: Hero = {
  name: "Tony",
  age: 45,
  codeName: "Ironman",
  //   power: "Money",
};

// const { age, name, power = "No tiene poder" } = person;
// console.log({ name, age, power });

interface createHero {
  name: string;
  age: number;
  codeName: string;
  power?: string;
}

const createHero = ({ name, age, codeName, power }: createHero) => ({
  id: 123132,
  name: name,
  age: age,
  codeName: codeName,
  power: power ?? "No tiene poder",
});

console.log(createHero(person));
