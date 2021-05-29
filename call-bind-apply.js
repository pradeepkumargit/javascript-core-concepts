

var person = {
    firstName:'Pradeep',
    lastName:'Kumar Singh',
    getFullName: function (){
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

// function borrowing
var person2 = {
    firstName: 'Neha',
    lastName: 'Dubey',
};
console.log(person.getFullName.apply(person2));
console.log(person.getFullName.call(person2));
// var logPersonName = person.getFullName.bind(person2);
// console.log(logPersonName);

var logName = function(lang1, lang2) {
    console.log('Logged:' + ' ' + this.getFullName());
    console.log('Arguments:',lang1 + ' '+ lang2);
    console.log('-----------');
}
var logPersonName = logName.bind(person);
logPersonName('en');

logName.call(person, 'en','es');
logName.apply(person,['en','es']);



//function currying
function multiply(a, b){
    return a * b;
}
var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(2));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
