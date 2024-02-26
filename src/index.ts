export {};

type Person = {
  address?: {
    country?: string;
  };

  name?: {
    first?: string;
  };
};

const person: Person = {
  address: {
    country: 'Chile',
  },
};

console.log(person.address?.country); // 👉️ "Chile"

console.log(person.name?.first); // 👉️ undefined

// ---------------------------------------------------

// EXAMPLE 2 - Error

// type Person = {
//   address?: {
//     country?: string;
//   };

//   name?: {
//     first?: string;
//   };
// };

// const person: Person = {
//   address: {
//     country: 'Chile',
//   },
// };

// // ⛔️ ERROR: Cannot read properties of undefined (reading 'first')
// console.log(person.name.first); // 👉️ undefined

// ---------------------------------------------------

// EXAMPLE 3 - Optional chaining (?.) vs logical AND (&&) operator

// type Person = {
//   address?: {
//     country?: string;
//   };

//   name?: {
//     first?: string;
//   };
// };

// const person: Person = {
//   address: {
//     country: 'Chile',
//   },
// };

// console.log(person.name && person.name.first); // 👉️ undefined

// ---------------------------------------------------

// EXAMPLE 4 - Using optional chaining to access array indexes

// type Person = {
//   numbers?: {
//     low?: number[];
//   };
// };

// const person: Person = {};

// console.log(person.numbers?.low?.[0]); // 👉️ undefined

// ---------------------------------------------------

// EXAMPLE 5 - Using the optional chaining operator with function parameters

// function logger(callback?: (msg: string) => void) {
//   callback?.('hello');
// }

// logger(console.log); // 👉️ "hello"
