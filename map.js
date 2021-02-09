const animals = require("./index.js");

const names = animals.map(animal => animal.name);
const species = animals.map(animal => animal.species);

console.log(names);
console.log(species);