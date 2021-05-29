// Namaste JavaScript
// getName();
// console.log(x);
// console.log(getName);

//var x = 7;
// var getName = () => {
//     console.log('Namaste JavaScript');
// }
// let getName = () => {
//     console.log('Namaste JavaScript');
// }
// function getName() {
//     console.log('Namaste JavaScript');
// }
//console.log(getName());
//console.log(x);







//***************************** *//
//ES5
//1
var a = 10;
function hoist() {
  a = 20;
  console.log('inner',a)
  var b = 100;
}

hoist();
console.log('outer',a);
// "inner", 20
// "outer", 20

//2 
var a = 10;
function hoist() {
  var a = 20;
  console.log('inner',a)
  var b = 100;
}

hoist();
console.log('outer',a);
// "inner", 20
// "outer", 10

//==================//
// ES6 
//1
let a = 10;
function hoist() {
  a = 20;
  console.log('inner',a)
  var b = 100;
}

hoist();
console.log('outer',a);
// "inner", 20
// "outer", 20

//2
let a = 10;
function hoist() {
  let a = 20;
  console.log('inner',a)
  var b = 100;
}

hoist();
console.log('outer',a);
// "inner", 20
// "outer", 10