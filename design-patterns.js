// Module Design Patterns
var moduleDesignPattern = (function() {
	// private variable / scope/ function 
  var name = 'Pradeep';
  console.log('inner',name);
  return {
   // public variable / scope/ function 
   showName:function() {
   console.log(name);
   }
  }
})();

console.log(moduleDesignPattern.showName());// Pradeep
console.log(moduleDesignPattern.name);// Undefined

// Prototype Design Patterns

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

// Add polofils into String Method
let myName  = 'Pradeep';
String.prototype.repeatify = function(char,num) {
  return char.repeat(num);
} 
console.log('my repeatify method added', myName.repeatify('Pradeep',3))

