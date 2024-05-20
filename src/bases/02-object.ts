export const person = {
  lastName: "Manrique",
  age: 33,
  address: {
    city: "Bogotá",
    zip: 122100,
    lat: 4.03454,
    lng: -75.4534,
  },
}; // as const;
// as const; Pasa las propiedades del objeto a solo lectura para que no sean modificadas

// Los objetos se pasan por referencia con esta asignación por lo que se cambia la propiedad de person
// const person2 = person;

// Para clonar el objeto puedo usar el operador spread de esta forma
// pero funciona solo si no hay anidamiento, en el siguiente nivel se sigue pasando solo la referencia y las propiedades de person son modificadas
// const person2 = { ...person };

// La forma correcta y moderna de hacer un clon real sin importar la anidación es
const person2 = structuredClone(person);

person2.lastName = "Salamanca";
person2.address.city = "Villavicencio";

console.log({ person });
console.log({ person2 });
