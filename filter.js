const animals = require("./index.js");

console.log(animals);

const dogs = animals.filter(animals =>{
    return animals.name === "Caro" && animals.species === "dog";
});


console.log(dogs);