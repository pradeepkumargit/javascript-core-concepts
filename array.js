
//https://jsfiddle.net/pradeep2619/56k7fxcr/3/

//https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php

// Find even and odd in array 
//Solution
//ES5
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var evenNumber = function(nums) {
    for(var i = 0;i < nums.length; i++) {
        if(nums[i] % 2 != 1){
            evens.push(nums[i]);
            //console.log(evens);
        } else{
            odds.push(nums[i])
            //console.log(odds);
        }
    }
    nums = [evens, odds];
    console.log(nums);
}
evenNumber(nums);

//ES6 - 1
var evenNumber6 = (nums) => {
   for(key in nums) {
        if(nums[key] % 2 != 1){
            evens.push(nums[key]);
            //console.log(evens);
        } else{
            odds.push(nums[key])
            //console.log(odds);
        }
   }
   nums = [evens, odds];
   console.log(nums);
}

evenNumber6(nums);

// Reverse a String 
function reverse(s){
    return s.split("").reverse().join("");
}

//javascript-how-to-reverse-words-in-a-string-instead-of-reversing-the-whole-str
/********************************************************************* */
// Solution 1
function reverseByWord(s){
    return s.split(" ").reverse().join(" ");
}

// Solution 2
//sample string
let str1 = "Javascript is Best";

//breaking into array
let str1WordArr = str1.split(" ");

//temp array to hold the reverse string      
let reverseWord = [];
 
 //can iterate the loop backward      
for(let i=(str1WordArr.length)-1;i>=0;i--) {
//pushing the reverse of words into new array
      reverseWord.push(str1WordArr[i]); 
}
console.log(reverseWord.join(" "));// Best is Javascript

// Solution 3
let str2 = 'This is life';

let str2WordArr = str2.split(" ");

let str2ReversedWord = [];

for(let i=(str2WordArr.length) -1;i>=0;i--) {
    str2ReversedWord.push(str2WordArr[i])
}
console.log(str2ReversedWord.join(" "))

/******************** */

var person = [
    {name:'Pradeep',city:'Delhi'},
    {name:'Vishal',city:'Pune'},
    {name:'Kedar',city:'Goa'}
]
var city  = person.filter(name =>name.city === 'Delhi')
//console.log(city);
    
var onlyDelhi = person.some(city =>city.city === 'Jaipur');
//console.log(onlyDelhi);

//  ****** Remove Duplicate  from Array *****
// ******************************************

var arr = ["apple", "bannana", "orange", "apple", "orange"];

//Option 1 - using filter method
function removeDuplicates(data) {
 return data.filter((item,index) => data.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

function findDuplicates(data) {
    return data.filter((item,index) => data.indexOf(item) !== index);
}
console.log(findDuplicates(arr));

// Option 2 - using new Set
var uniqueArry = Array.from( new Set(arr));
console.log(uniqueArry);

//Option3  - Using Lodash
//var unique = _.uniq(arr);
//console.log(unique);

var users = [
    {id:1,name:'ted'},
    {id:1,name:'ted'},
    {id:1,name:'bob'},
    {id:3,name:'sara'}
  ];
//var uniqueUsersByID = _.uniqBy(users,'id'); //removed if had duplicate id

// get-the-element-with-the-highest-occurrence-in-an-array 
//************************************ */

// Option 1
var arr1 = ['pear', 'apple', 'orange', 'apple'];
function mode(arr){
    return arr.sort((a,b) => arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
}
console.log(mode(arr1));

// Option 2 

//'arr' here is the array of finite number. 
//'mf' is the default maximum frequency.
//'m' is used for incrementing the element and initially set to zero.
//'item' is used for assigning the element.

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr.length; i++) {
  for (var j = i; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
        m++;
    }
    if (mf < m) {
      mf = m;
      item = arr[i];
    }
  }
  m = 0;
}

console.log(item, mf ,'times');

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

var mf =1;
var count = 0;
var item;
for( var i = 0;i<arr.length; i++) {
    for( var j = i;j<arr.length;j++) {
        if(a[i] === a[j]) {
            count++;
        }
        if(mf < count) {
            mf = count;
            item= arr[i]
        }
    }
    count = 0;
}
console.log(item,mf,'times')

var mf = 1;
var count = 0;
var item;

for(i = 0; i< arr.length ;i++) {
    for( var j = i; j< arr.length;j++) {
        if( arr[i] === arr[j]) {
            count ++;
        }
        if(mf < count) {
            mf = count;
            item = arr[i]
        }
    }
    count = 0;
}
console.log(item,mf,'times');
/********************************* */
//merge-flatten-an-array-of-arrays
/**************************/

// Optin 1
let multiArray1 = [1,2,3,[4,5,6],[7,8,9]];
function flatArray(arr) {
    const res = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            const subRes = flatArray(item)
            res.push(...subRes)
        } else {
            res.push(item)
        }
    }
    return res;
}
console.log('got Flat Array1',flatArray(multiArray1));

// Option 2
let multiArray2 = [1,2,3,[4,5,6],[7,8,9]];
var flattened = multiArray2.join().split(",");
//console.log('got Flat Array2',flattened);

// Option 3
var multiArray3 = [["a"],["b","c"],["d"]]; //array of arrays
var flatArrayUsingAppy = Array.prototype.concat.apply([], multiArray3); //flatten array of arrays
//console.log('got Flat Array3',flatArrayUsingAppy);


//rotate-the-elements-in-an-array-in-javascript
/************************ */
const arrtoRotate = [1,2,3,4,5];
const rotateArray = (arr,count =1) => {
    return [...arr.slice(count,arr.length), ...arr.slice(0,count)];
};

const rotateArr = (arr,count =1) => {
    return [...arr.slice(count,arr.length,...arr.slice(0,count))]
}

console.log('rotate array',rotateArray(arrtoRotate,1));
console.log('rotate array',rotateArray(arrtoRotate,2));



//025468
const insertDashes = (num) => {
    var str = num.toString();
    var result = [str[0]]
    for( var i = 1; i < str.length; i++) {
        if(str[i] % 2 === 0) {
            result.push('-',str[i])
        }
        else {
            result.push(str[i])
        }
    }
    console.log(result.join(''))
}
//console.log(inserDashes('025468'));

//Fox' the output should be 'tHE qUICK bROWN fOX'
 var str = 'The Quick Brown Fox';
 var strSplit = str.split('');
 result = [];
 for( let item  of strSplit) {
  if(item === item.toUpperCase()) {
      result.push(item.toLowerCase())
  } else{
      result.push(item.toUpperCase())
  }
 }
 //console.log('result',result.join(''));

  //19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
//Sample array :
//array1 = [1,0,2,3,4];
//array2 = [3,5,6,7,8,13];
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

(function(array1,array2){
 var result = [];
 if(array1.length > array2.length) {
    array1.forEach((item,index) => {
        result[index] = item + (array2[index] || 0)
    });
 } else {
    array2.forEach((item,index) => {
        result[index] = item + (array1[index] || 0)
    })
 }
 //console.log('sum',result)
})(array1,array2);

//25. Write a JavaScript function to sort the following array of objects by title value. Go to the editor
//Sample object :
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
 
let arrsort = library.sort((a,b) => a.title.localeCompare(b.title))
//console.log(arrsort)

//27. Write a JavaScript function to retrieve the value of a given property from all elements in an array. Go to the editor
//Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//Expected result : [15, -22, 47]
var array27 = [NaN, 0, 15, false, -22, '',undefined, 47, null];
const findArr = (myArray27) => {
    var result = [];
    for( let item of myArray27) {
       if(myArray27.includes(item)) {
        result.push(item);
       }
    }
    console.log('isfind',result)
}
//console.log(findArr([15, -22, 47]));


//26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

//Input: numbers= [10,20,10,40,50,60,70], target=50
//Output: 2, 3
function twoSum(nums, target_num) {
    var map = [];
    var indexnum = [];
    
    for (var x = 0; x < nums.length; x++) {
        if (map[nums[x]] != null) {
            var index = map[nums[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        }
        else {
            map[target_num - nums[x]] = x;
        }
    }
    return indexnum;
}

//31. Write a JavaScript function to remove a specific element from an array. Go to the editor

//Test data :
function removeArrLEment(arr,n) {
    var index = arr.indexOf(n);
      console.log('what is index',index)
     arr.splice(index,1)
     return arr;
 
 }
//removeArrLEment([2, 5, 9, 6], 5)

//32. Write a JavaScript function to find an array contains a specific element. Go to the editor
function findContainElement(arr,element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
var findContainElementArr = [2, 5, 9, 6];
//console.log(findContainElement(findContainElementArr, 5));
