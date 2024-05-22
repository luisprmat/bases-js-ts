// Form antigua de función
// function greetPerson(name: string) {
//   return `Hola ${name}`;
// }

// Arrow function tipada, forma corta
const greetPerson = (name: string) => `Hola ${name}`;

const getUser = (uid: string) => ({
  uid: uid,
  username: "Luis001",
});

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "Super fuerza",
  },
];

const hero = heroes.find((h) => h.id === 2);

console.log(hero?.power?.toUpperCase());
