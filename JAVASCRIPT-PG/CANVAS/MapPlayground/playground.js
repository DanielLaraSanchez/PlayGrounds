let animals = [
  { name: 'Dani', species: 'PUtoToro', age: 23},
  { name: 'Caro', species: 'Dog', age: 45},
  { name: 'Moni', species: 'Cat', age: 11},
  { name: 'Jose', species: 'Perraco', age: 41 },
  { name: 'Oscar', species: 'Oso', age: 9},
  { name: 'Irene', species: 'Oso', age: 99}

]

  let names = [];
  for(var i = 0; i < animals.length; i++){
    names.push(animals[i].name)
  }


  let onlyDogs = animals.filter(function(animal){
    if(animal.species === 'Dog')
    return true
  })

let onlyDogsNames = onlyDogs.map(function(animal){
  return animal.name + ' is a ' + animal.species
})

console.log(onlyDogs)
console.log(onlyDogsNames)

// let names1 = animals.map(function(animal){
//   return animal.name + 'y es un animal del tipo' + animal.species;
// })
//
// let soloOso = animals.filter(function(animal){
//   if(animal.species === 'Oso'){
//     return true;
//   }
// })
//
// let soloOsoMap = soloOso.map(function(animal){
//   return animal.name
// })



//
// console.log(soloOsoMap);
// console.log(names);
// console.log(animals.length)
// console.log(names1);
