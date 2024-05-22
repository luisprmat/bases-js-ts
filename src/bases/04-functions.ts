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

console.log(getUser("XYZ-465"));
