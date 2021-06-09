//https://www.thatjsdude.com/interview/js1.html

//Write a JavaScript program to find the most frequent item of an array

// Solution

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counts = {};
var compare = 0;
var mostFrequent;
(function(array){
   for(var i = 0, len = array.length; i < len; i++){
       var word = array[i];
       
       if(counts[word] === undefined){
           counts[word] = 1;
       }else{
           counts[word] = counts[word] + 1;
       }
       if(counts[word] > compare){
             compare = counts[word];
             mostFrequent = arr1[i];
       }
    }
  return mostFrequent;
})(arr1);

//1. check Prime Number
function checkPrime(n) {
    var divisor = 2;
    while( n > divisor) {
        if(n % divisor ===0) {
            console.log('Is Prime Number1',false)
            return false;
        } else {
            divisor++;
            console.log(divisor);
        }
    }
    console.log('Is Prime Number2',true)
    return true;
}
//checkPrime(4);

//fibonacci series
function fibonacci(n) {
    var fibo = [0,1];
    if(n <= 2) {
        return 1;
    }
    for( var i =2; i<=n;i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    console.log(fibo[n]);
    return fibo[n];
}
fibonacci(12);

var mystring = '101101';
function countLikeAndDislike(mystring) {
    var like  = 0;
    var dislike = 0;
    var newArr = mystring.split('');
    for(let element of newArr) {
        console.log(element);
        if (element > 0) {
            like +=1;
        } else {
            dislike+=1;
        }
        console.log('like',like)
        console.log('dislike',dislike)
    }
}
///console.log(countLikeAndDislike('101101'));

// Object are pass by reference or pass by value
//1
(function(){
    const a = 'Hello World';
    function foobar(a) {
        return a;
    }
    foobar(a)
    console.log(a)
})();


//2
(function(){
    const a = 'Hello World';
    function foobar(a) {
        a = 'Hello Jupiter';
        return a;
    }
    foobar(a)
    console.log(a)
})();

// // 3
(function(){
    const a =  {inner:'Hello World'};
    function foobar(a) {
        a = 'Hello Jupiter';
        return a;
    }
    foobar(a)
    console.log(a);
})();

//4
(function(){
    const a =  {inner:'Hello World'};
    function foobar(a) {
        a.inner = 'Hello Jupiter';
        return a;
    }
    foobar(a)
    console.log(a);
})();
//5
(function(){
    const a =  {inner:'Hello World'};
    function foobar(a) {
        a = { inner:'Hello Jupiter'}
        return a;
    }
    foobar(a)
    console.log(a);
})();



function transformString(string) {
    //var string = 'thisIsAVariable';
    //var string = 'modify_variableName';

    var myString = string.split('');
    var finalString = '';
    var result = [];
    //console.log(myString);
    for (let item of myString) {
        if (item.includes('_')) {
            console.log('true')
            item = item.toUpperCase();
        }
        else if (item == item.toUpperCase()) {
            item = item.toLowerCase();
            item = '_' + item;
            result.push(item)

        } else {
            item = item.toLowerCase();
            result.push(item)
        }
        console.log('finalString', result.join(''));
    }
}
//console.log(transformString('modify_variableName'));

//Count of character occerence

var arr1= ['b', 'a', 'c', 'c','a', 'a', 'a', 'b','a'];
arr1 = arr1.sort((a, b) => a.localeCompare(b));
var counts = {};
var compare = 0;
var mostFrequent;
var countString = '';
(function(array){
   for(var i = 0;i <array.length; i++){
       var word = array[i];
       
       if(counts[word] === undefined){
           counts[word] = 1;
       }else{
           counts[word] = counts[word] + 1;
       }
       if(counts[word] > compare){
             compare = counts[word];
             mostFrequent = arr1[i];
       }
   }

   for (const item in counts) {
      countString = countString + item + counts[item];
      console.log(countString)
   }
   //console.log('mostFrequent',mostFrequent)
   return mostFrequent;
})(arr1);
// output : "a5b2c2"

//Check how many objects are in the array with the same key in JavaScript
const arrHowManyObjects = [
    {
       "name":"aaa",
       "id":"2100",
       "designation":"developer"
    },
    {
       "name":"bbb",
       "id":"8888",
       "designation":"team lead"
    },
    {
       "name":"ccc",
       "id":"6745",
       "designation":"manager"
    },
    {
       "name":"aaa",
       "id":"9899",
       "designation":"sw"
    }
 ];
//  const output = {
//     "aaa": 2,
//     "bbb": 1,
//     "ccc": 1
//  };

const countNames = (arr= []) =>  {
    const res = {};
    for( i= 0; i < arr.length ; i++) {
        const { name } = arr[i];
        if(res.hasOwnProperty(name)) {
            res[name]++;
        } else {
            res[name] = 1;
        }
    }
    return res;
}
//console.log('countNames', countNames(arrHowManyObjects));

//JavaScript Sum of two objects with same properties
const obj1 = {
    a:12, b:8, c:17
 };
 const obj2 = {
    a:2, b:4, c:1
 };
//  const output = {
//     a:14, b:12, c:18
//  };

const sumObjectByKey = (...objs) => {
    const res = objs.reduce((a,b) => {
        for(let item in b) {
            if(b.hasOwnProperty(item)) {
                a[item] = (a[item] || 0)  + b[item]
            }
        }
        return a;
    },{})
    return res;
}
//console.log('sumObjectByKey',sumObjectByKey(obj1,obj2));

//Find specific key value in array of objects using JavaScript
const obj = {
    "LAPTOP": [{
       "productId": "123"
    }],
    "DESKTOP": [{
       "productId": "456"
    }],
    "MOUSE": [{
       "productId": "789"
    }, {
       "productId": "012"
    }],
    "KEY-BOARD": [{
       "productId": "345"
    }]
 };

 const searchByPair = (obj ={}, pair= {}) => {
    const toSearch = Object.values(pair)[0];
    let required = undefine;
    Object.keys(obj).forEach(key => {
        if(obj[key].find( pid => pid.productId === toSearch)) {
            required = key;
        }
    })
    return required;
}
//console.log(searchByPair(obj, {'productId': '123'}));

// 30th May start

//1.Calculate Sum of All Numbers in a Jagged Array

let ar = [1, 2, [15, [23], [5, 12]], [100]];
let flatArray = ar.join().split(',');
//console.log('flatArray',flatArray);

let sumofJaggedArray = flatArray.reduce( (totalSum,item) =>  {
 return Number(totalSum) + Number(item);
},0);
//console.log('sumofJaggedArray',sumofJaggedArray);

//2.Loop through an object
const person = { name: "Shoaib", Age: 25, Gender: "Male" };
for(let property in person) {
//console.log(`${property}: ${person[property]}`);
}

const person2 = Object.values(person);
//console.log('only person 2',person2)

// 3, find in objecr

const students = [
  {name: 'Shoaib', roll: 2},
  {name: 'Mehedi', roll: 10},
  {name: 'Alex', roll: 5}
];

const studentAlex = students.find(student => student.name === 'Alex');
//console.log('studentAlex',studentAlex)

//4.sort alphabetically
const name = ['Shoaib', 'Mehedi', 'Alex', 'Jane'];
const sortedName = name.sort();
//console.log('sortedName',sortedName)

//5.sort numerically

const arr5 = [1, 30, 4, 21, 100000];

const sortedArr5 = arr5.sort( (a,b) => a -b);

//nsole.log('sortedArr5',sortedArr5)

//6. Reverse a String
 let word = 'JavaScript is best';
 let reversedSting = word.split("").reverse().join("");
 let reversedStingByWord = word.split(" ").reverse().join(" ");
 //console.log('reversedStingByWord',reversedStingByWord);
 
 //7.Swap values
 
let a = 50, b = 16;
[a,b] = [b,a];
//console.log(a,b);

//8. Convert an array to an object

var fruits = ["banana", "apple", "orange"];

const convetedFruit = {...fruits};
//console.log('convetedFruit',convetedFruit)

//9. Get random values from an array
const colors = ["red", "pink", "yellow", "black", "blue"];

const randomColor = colors[Math.floor(Math.random() * colors.length)];
//console.log('randomColor',randomColor)

//10.Remove duplicates from an array
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];

const removeDuplicate = [...new Set(fruits)];
//console.log('removeDuplicate',removeDuplicate);

//11.Find the intersection of two arrays

var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];

const intersectionOfArray = [... new Set(numOne)].filter(item => numTwo.includes(item));
//console.log('intersectionOfArray',intersectionOfArray);

//12. Print PizzBuzz
/* for(var i =1; i<=20; i++) {
  if( i %15 ===0) {
   console.log('FizzBuzz');
  } else if( i % 3 ===0) {
     console.log('Fizz');
  } else if( i % 5 ===0) {
     console.log('Bizz');
  } else {
     console.log(i)
  }
} */


// 13. Count the word in the string
function wordCount(str) {
   var stringArray = str.split(' ');
   var count = 0;
   for (var i = 0; i < stringArray.length; i++) {
     var word = stringArray[i];
     if (/[A-Za-z]/.test(word)) {
       count++
     }
   }
   return count;
} 


//console.log(wordCount('This is a block-of 99'));

// 14. Find the firt occurence index of substring
// https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript

var s = 'juliasamanthantjulia';
var x = 'ant';
function firstOc(s,x) {
	if (!s) {
    return [];
  }
  // if find is empty string return all indexes.
  if (!x) {
    // or shorter arrow function:
    return source.split('').map((_,i) => i);
  }
  var result = [];
  for (var i = 0; i < s.length; ++i) {
    // If you want to search case insensitive use 
    if (s.substring(i, i + x.length).toLowerCase() == x) {
    //if (s.substring(i, i + x.length) == x) {
      result.push(i);
    }
  }
  console.log(result[0]);
  return result;
}
//firstOc(s,x);


// 15 -Most repeated no/char in an array

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf= 1;
var count = 0;
var item;
for( var i = 0; i < arr.length; i++) {
 for( var j = i; j<arr.length;j++) {
   if(arr[i] == arr[j]) {
     count++
   }
   if(mf < count) {
    mf = count;
    item  = arr[i]
   }
 }
 count = 0;
}
//console.log(item, mf, 'times');
//const first = performance.now();
// const second = performance.now();
//console.log(first - second); 

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

// 16 .Change body background color on click
let counter = 0;
function changeColor() {
  let colors = ['red','green', 'blue'];
  document.body.style.backgroundColor = colors.slice(counter, counter+1);
  if( counter === colors.length -1) {
   counter = 0;
  } else {
   counter++;
  }
}

// 17.

var myString = 'eN:q=0.8,en:q=0.4,En-Pa,Lp-Ma,eG:q=0.6';
function showmyTextWithNumber(str) {
    console.log('first string',str);
    let stringSplit = str.split(',');   
    console.log('stringSplit',stringSplit);
    //console.log('after sort',stringSplit.sort())
    let result= [];
    let resultwithQ = [];
    let resultwithOutQ = [];
    for (let i = 0; i < stringSplit.length; i++) {
        if (stringSplit[i].includes('q')) {
            console.log('value with q ', stringSplit[i])
            //eN:q=0.8,en:q=0.4, eG:q=0.6
            resultwithQ.push(stringSplit[i])
        } else {
            console.log('value without q ', stringSplit[i])
            //En-Pa
            resultwithOutQ.push(stringSplit[i]);
        }
    }
    //resultwithQ = {...resultwithQ};
    for( let item of resultwithQ) {
        let weitage = item.substring(item.length - 3);
        console.log('weitage',weitage)
        result.push(weitage)
    }
    console.log('result',result);
    //console.log('result',result.sort().reverse());
    console.log('resultwithQ',resultwithQ);

    let finalResult = [...resultwithOutQ,...resultwithQ]
    console.log('finalResult',finalResult);
    return finalResult;
}

showmyTextWithNumber(myString);
   