// Morgan Stanley
//1. - 29 th May 2021
let myName  = 'Pradeep';
String.prototype.repeatify = function(char) {
  return char.repeat(2);
} 
//console.log(myName.repeatify('Pradeep'))

// find if I can create a new work from previosu word
function reverseMyWord(parm1, parm2) {
  let sortAndJoinParamOne = parm1.split("").sort().join("");
  let sortAndJoinParamTwo = parm2.split("").sort().join("");
  if(sortAndJoinParamOne.includes(sortAndJoinParamTwo)) {
   	return true;
  } else {
    return false;
  }
}

console.log(reverseMyWord('Tips','spiT'));

//2 Find the occurence of charcter in array

//'arr' here is the array of finite number. 
//'mf' is the default maximum frequency.
//'m' is used for incrementing the element and initially set to zero.
//'item' is used for assigning the element.
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var count = 0;
var item;

for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
        count++;
    }
    if (mf < count) {
      mf = count;
      item = arr[i];
    }
  }
  count = 0;
}
console.log(item, mf ,'times');

// 3  Object based question
var name = {
firstName:'Pradeep',
lastName: 'Singh'
}

let person = {
    name: {
    firstName:'Vivek',
    lastName: 'Singh'
    },
    getFullName: () => {
    return `${this.name.firstName} ${this.name.lastName}`;
    }
}
//console.log(person.getFullName())

// 4 Promise based question 
const commonPromise = () => Promise.resolve('success');
function foo() {
	commonPromise().then(res => console.log(res));
  console.log('from foo');
}
async function bar() {
  console.log( await commonPromise());
  console.log('from bar');
}
// from foo success success from bar

// Mearsk:
//2.
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

// SAP
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
