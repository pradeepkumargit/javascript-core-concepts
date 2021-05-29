//https://www.tutorialspoint.com/es6/es7_newfeatures.htm

//Exponentiation Operator
let base = 2
let exponent = 3
console.log('using Math.pow()',Math.pow(base,exponent))//
console.log('using exponentiation operator',base**exponent)//8


//Array Includes

let marks = [50,60,70,80]
//check if 50 is included in array
if(marks.includes(50)){
    console.log('found element in array')
}else{
    console.log('could not find element')
}

// check if 50 is found from index 1
if(marks.includes(50,1)){ //search from index 1
    console.log('found element in array')
}else{
    console.log('could not find element')
}
//check Not a Number(NaN) in an array
console.log([NaN].includes(NaN))

//create an object array
let user1 = {name:'kannan'},
user2 = {name:'varun'},
user3={name:'prijin'}
let users = [user1,user2]

//check object is available in array
console.log(users.includes(user1))
console.log(users.includes(user3))
