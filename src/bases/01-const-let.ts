const firstName = 'Luis'
const lastName = 'Parrado'

// Depuración donde puedo ver los nombres y valores de las variables
// console.log({firstName, lastName})

// const: No permite reasignación, se usa solo en el scope
// let: Permite reasignación, se usa solo en el scope
// var: Permite reasignación sin importar el scope

// Uso de template strings
// export: Para transformar el archivo en un módulo
export const fullName = `${firstName} ${lastName}`

// console.log(fullName)