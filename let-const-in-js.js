// Namaste JavaScript

// Is let and const are Hoisted in javScript ? - YES
// for var there is momory allocated in global space 
// but for let and const, there is meomory allocted, that is hoisting, but they are stored
// in different space then the global, they are not part of windo object, you can not 
//access them before you put some values in them 

// Temporal Dead Zone - it this the time since when let and const variable are hoisted and 
// since till it is initilizes some value, time between this is called temporal dead zone
// When the variable are in tempral dead zone, you can not access them, you can only 
// access them when some valye are initialized into them

//console.log(b);
// console.log(a);
//let a = 10;
//console.log(a);
//var b = 100;
//console.log(b);

// Let and const are blocked Scoped ? - YES
//1.
// let a  = 10;
// console.log('outer -1 let a',a)
// if(true) {
//     a = 20;
//     console.log('inner let a',a);
// }
// console.log('outer -2 let a',a)
// "outer -1 let a", 10
// "inner let a", 20
// "outer -2 let a", 20

//2.

// let a  = 10;
// console.log('outer -1 let a',a)
// if(true) {
//     let a = 20;// now A in Block Scope
//     console.log('inner let a',a);
// }
// console.log('outer -2 let a',a);

// "outer -1 let a", 10
// "inner let a", 20
// "outer -2 let a", 10

//3.
// {
//     var a =10;
//     let b = 20 
//     const c = 30;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//30
// }
// console.log(a);//10
// console.log(b);// B is not defined
// console.log(c);

//4. Shadowing
let b = 100;
{
    var a =10;
    let b = 20 
    const c = 30;
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}
console.log(b);//100 - this b is from outer scope

function showNumber() {
    let a = 10;
    if(true) {
        a = 20;
        console.log('inner a',a)
    }
    console.log('outer a',a)
}
//*************************  Namaste JavaScript Ends here */