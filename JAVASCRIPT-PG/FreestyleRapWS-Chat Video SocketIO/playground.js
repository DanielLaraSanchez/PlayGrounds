// function privateTest(){
//  var points=0;
//  this.getPoints=function(){
//  return points;
//  };
//  this.score=function(){
//  points++;
//  };
// }
// var private = new privateTest();
// private.score();
// console.log(private.points); // undefined
// console.log(private.getPoints());
// function test(){
  // for (var i=1; i<=5; i++) {
  //  setTimeout( function delay(){
  //  console.log( i );
  //  }, i*100);
  // }
// }
function perform(ninja) {
sneak(ninja);
infiltrate(ninja);
}
function sneak(ninja) {
return ninja + " skulking";
}

function infiltrate(ninja) {
return ninja + " infiltrating";
}
console.log(perform("Kuma"));

//
// console.log(test())
// for (var i=1; i<=5; i++) {
//  (function(j){
//  setTimeout( function delay(){
//  console.log( j );
//  }, j*100);
//  })( i );
// }
