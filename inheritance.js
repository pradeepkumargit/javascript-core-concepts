

//1. Inheritance using an Object Constructor:
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
//creating new instances of person object
let person1 = new Person('Pradeep', 'Kumar');
let person2 = new Person('Rahul', 'Singh');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);
 
// Adding method to an object - will work only for person 1
person1.getFullName = function () {
    return this.first_name + ' ' + this.last_name;
}
// Adding method to an object - will work only for person 1
Person.getFullName = function () {
    return this.first_name + ' ' + this.last_name;
}
// Adding method to an object - will work for person 1 and person2
Person.prototype.getFullName = function () {
    return this.first_name + ' ' + this.last_name;
}

person1.getFullName();

//2. Inheritance using Object.create
//This is a parent class.
var parent = {
    sayHi: function () {
        alert('Hi, I am parent!');
    },

    sayHiToWalk: function () {
        alert('Hi, I am parent! and going to walk!');
    }
};
//This is child class and the parent class is inherited in the child class.
var child = Object.create(parent);
child.sayHi = function () {
    alert('Hi, I am a child!');
};


//3. Inheritance using Function Borrowing in JavaScript Using Object literals
//============================================================================
var human = {
    firstName: 'Pradeep',    
    job: 'Developer',
    showFirstNameAndJob: function() {
        console.log('Hi , My Name is' + ' ' + this.firstName + ', and my job is' + ' ' + this.job);
    }
};

var vishal = {
    firstName: 'Vishal',
    job: 'designer'
};

human.showFirstNameAndJob.call(vishal);
human.showFirstNameAndJob.apply(vishal);

var vishalFirstNameAndJob = human.showFirstNameAndJob.bind(vishal);

vishalFirstNameAndJob();

//4. Inheritance using Function Borrowing in JavaScript Using Classes
//===================================================================
//https://medium.com/@ensallee/function-borrowing-in-javascript-4bd671e9d7b4

class Dog {
    constructor(name, age, breed) {
      this.name = name
      this.age = age
      this.breed = breed
    }
    tellUsAboutYourSelf() {
      return `My name is ${this.name}. I am a ${this.breed} and I am ${this.age} years old.`
    }
  
    woof() {
      return "WOOF!!!"
    }
}
  
let fido = new Dog("Fido", 3, "dachshund")
fido.tellUsAboutYourSelf()
//=> 'My name is Fido. I am a dachshund and I am 3 years old.'
class Cat {
    constructor(name, age, breed) {
      this.name = name
      this.age = age
      this.breed = breed
    }
  
    meow() {
      return "MEOW!!!"
    }
}
  
let sparkles = new Cat("Sparkles", 5, "Siamese")
sparkles.tellUsAboutYourSelf()
//=>TypeError: sparkles.tellUsAboutYourSelf is not a function
// Fix 
fido.tellUsAboutYourSelf.call(sparkles)
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’
fido.tellUsAboutYourSelf.apply(sparkles)
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’
const describeSparkles = fido.tellUsAboutYourSelf.bind(sparkles)
describeSparkles()
//=>’My name is Sparkles. I am a Siamese and I am 5 years old.’

// 5.  Inheritance Using ES6 classes
//==================================

class Person{ 
    constructor(name){ 
        this.name = name; 
    } 
    //method to return the string 
    toString(){ 
        return (`Name of person: ${this.name}`); 
    } 
} 
class Student extends Person{ 
    constructor(name,id){ 
        //super keyword to for calling above class constructor 
        super(name); 
        this.id = id; 
    } 
    toString(){ 
        return (`${super.toString()},Student ID: ${this.id}`); 
    } 
} 
let student1 = new Student('Mukul',22); 
console.log(student1.toString()); 