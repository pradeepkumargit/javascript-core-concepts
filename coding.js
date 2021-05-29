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
console.log(countLikeAndDislike('101101'));

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


/**
  assignment: twoSum
  Given an array of integers nums and an integer target,
  return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution,
  and you may not use the same element twice.
  You can return the answer in any order.
  
  Example 1:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]
  Output: Because nums[1] + nums[2] == 6, we return [1, 2].

  Example 2:
  Input: nums = [3,3], target = 6
  Output: [0,1]

  constraints:
  Only one valid answer exists.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // write body for twoSum function
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                result.push(i, j);
                console.log('what is result i', result);
            }

        }
    }
    return result;

};
  
  // console.log(twoSum([2, 7, 11, 15], 13)); // expected: [0, 2]
  //console.log(twoSum([2, 7, 11, 15], 13));
  
  //console.log(twoSum([1,2,3,4,5,6,7,8,9,10], 3));

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
   //console.log(mostFrequent)
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
 console.log(searchByPair(obj, {'productId': '123'}));