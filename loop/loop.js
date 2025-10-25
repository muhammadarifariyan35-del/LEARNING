//? loop


//! ------for loop------------


let car = ['b m w', 'v o l v o', 't o y o t e', 'f o r d ', 't e s l a', 'h e l l o']

car.push('a')
//console.log(car[0]);

for( let i = 0;   i < car.length;  i++){
//console.log(car[i]);
}


let animal = ['hati', 'chagol', 'mohis']
animal.push('phatha')
for(let a = 0; a < animal.length; a++ ){
//console.log(animal[a]);
}


//!----for in loop------------

let person = {
    name: 'arif',
    age: 20,
    country: 'Bangladesh',
}

for( let p in person){
    let Capletter = p.charAt(0).toUpperCase() + p.slice(1)
  //  console.log(Capletter+ ': ' + person[p] );
}



//!-----for each method----------


car.forEach(function(i){
//console.log(i);
})



//!------for of --------------

for(let n of car){
 //   console.log(n);
}



//! ------while loop ------
let num = 7;
while (num < 10 ){
console.log(num);
num++;
}