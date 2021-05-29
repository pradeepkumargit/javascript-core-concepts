// Morgan Stanley
//1.
let myName  = 'Pradeep';
String.prototype.repeatify = function(char) {
  return char.repeat(2);
} 
//console.log(myName.repeatify('Pradeep'))

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