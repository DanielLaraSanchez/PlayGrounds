// var clientsWaiting = [1,2,3,4,5,6,7,8,9,10]
//
// var randomSelector = function(id){
//   if (clientsWaiting.length <= 1) return
//
//   const randomClient = clientsWaiting[Math.floor(Math.random()*clientsWaiting.length)]
//
//   if(id !== randomClient){
//     console.log("My ID is", id)
//     console.log("randomClient is", randomClient)
//     return randomClient
//   }
//   else {
//     randomSelector(id)
//   }
// }
//
//
// randomSelector("hola")
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (b, a){
console.log(a + ". " + b); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});
