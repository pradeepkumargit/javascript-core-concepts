//Closures are frequently used in JavaScript for object data privacy, 
//in event handlers and callback functions, and in partial applications, 
//currying, and other functional programming patterns.
//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

//function along with it's lexical scope forms a Closure

// Uses of Closure:
// - Module Design Patterns
// - Currying
// - Function like once
// - memoize
// - maintaining state in async world
// - setTimeouts
// - Iterators

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a)
//     }
//     y()
// }
// x();

//OR
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a)
//     }
// }
// var z = x();
// z();

function x() {
    var a = 7;
    function y() {
        console.log(a)
    }
    a = 100;
    return y;
}
var z = x();
//..................... 1000 line of code
console.log(z());

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b)
        }
        y();
    }
    x();
}
z();

// With setTimeout
//********************************** */
function sayHiLater() {
    var greeting ="HI";
    setTimeout(function() {
        console.log(greeting)
    }, 3000);
}
sayHiLater();

// Example for solved one use case - 1
//1)  First Case
var counter = 0;
function add() {
 counter += 1;
}
add();
add();
add();
//Problem - Any code on the page can change the counter, without calling add().

//2) Second case - added counter as local variable

var counter = 0;
function add() {
 var counter = 0;
 counter += 1;
}
add();
add();
add();
//The counter should now be 3. But it is 0
//It did not work because we display the global counter instead of the local counter.

//3 - Third - case - We can remove the global counter and access the 
//local counter by letting the function return it:

function add() {
    var counter = 0;
    counter += 1;
    return counter;
}
add();
add();
add();
//The counter should now be 3. But it is 1.
//It did not work because we reset the local counter every time we call the function.


// 4 - Nested Function 
function add() {
 var counter = 0;
 function plus() {
     counter += 1;
 }
 plus();
 return counter;
}
add();
add();
add();
// 0

// 5 - Using Closure
//1 -To use a closure, define a function inside another function and expose it. 
//To expose a function, return it or pass it to another function.

//2 -The inner function will have access to the variables in the outer function scope, 
//even after the outer function has returned.

var add = (function() {
    var counter = 0;
    return function () { 
        counter +=1;
        return counter;
    }
})();
add();
add()
add()

//Partial Application:
//https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8

//An example will help. Say you have a function that adds two numbers:
//Exaple 1
// const add = (a, b) => a + b;
// const add10 = partialApply(add, 10);
// add10(5);
// const add10 = partialApply(add, 10);
// add10(5);


// partialApply(targetFunction: Function, ...fixedArgs: Any[]) =>
//   functionWithFewerParams(...remainingArgs: Any[])
const partialApply = (fn, ...fixedArgs) => {
    return function (...remainingArgs) {
      return fn.apply(this, fixedArgs.concat(remainingArgs));
    };
};
  
//Example -2
//Currying: A function that takes a function with multiple parameters as input and 
//returns a function with exactly one parameter.

//function currying
function multiply(a, b){
    return a * b;
}
var multipleByTwo = multiply.bind(this, 2);
//console.log(multipleByTwo(2));

var multipleByThree = multiply.bind(this, 3);
//console.log(multipleByThree(4));

function sum(x) {
    return function(y) {
        return function(z) {
            return x + y + z;
        }
    }
}
sum(2)(3)(4);

// Namaste JavScript
// Closures with setTimeout
// closure + setTimeout Interview questions
function xClosure1() {
    var i = 1;
    setTimeout(() => {
        console.log(i)
    },1000)
    console.log('Pradeep')
}
//xClosure1();

// Problem - Print from 1-5 uisng setTimeour + closure

function xClosureProblem() {
    for( var i = 1; i<= 5; i++) {
        setTimeout(function() {
        console.log(i)
        },i* 1000);
    }
}
//xClosureProblem();
// 6
// 6
// 6 
// 6
// 6


// Soltion 1
function xClosure2() {
    for( let i = 1; i<= 5; i++) {
        setTimeout(function() {
            console.log(i)
        },i* 1000);
    }
}

//xClosure2();
// Soltion 2
function xClosure3() {
    for( var i = 1; i<= 5; i++) {
        function close(i) {
            setTimeout(function() {
            console.log(i)
        },i* 1000);
        }
        close(i);
    }
}

//xClosure3();

   
