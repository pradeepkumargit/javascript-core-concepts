//https://www.freecodecamp.org/news/es8-the-new-features-of-javascript-7506210a1a22/

//https://www.dotnetcurry.com/javascript/1405/es8-es2017-javascript-new-features

//#1 - Object.values()

const countries = {    
    BR: 'Brazil',   
    DE: 'Germany',    
    RO: 'Romania',    
    US: 'United States of America'
};
Object.values(countries); 
// ['Brazil', 'Germany', 'Romania', 'United States of America']

//#2 - Object.entries 
const countries = {    
    BR: 'Brazil',    
    DE: 'Germany',    
    RO: 'Romania',    
    US: 'United States of America'
};
Object.entries(countries); 
//// [['BR', 'Brazil'], ['DE', 'Germany'], ['RO', 'Romania'], ['US','United States of America']]

//#3 - String padding (padStart and padEnd)
'0.10'.padStart(10); // it return a string of length 10, padding empty spaces in the beginning

//#4 -Object.getOwnPropertyDescriptors()
const obj = {    
    name: 'Pablo',    
    get foo() { 
        return 42; 
    }
};

Object.getOwnPropertyDescriptors(obj);//
// {//  "name": {// "value": "Pablo",// "writable":true,// "enumerable":true,// "configurable":true//  },
//  "foo":{//  "enumerable":true,//  "configurable":true,// "get": function foo()// "set": undefined//  }// }

//#5 -Trailing commas in function parameter lists and calls
// getDescription(name, age,) { 
    
// }

//#6 -Async functions (async and await)
function loadExternalContent() {    
    return new Promise((resolve, reject) => {        
        setTimeout(() => {  resolve('hello');        
        }, 3000);    
    });
}

async function getContent() {   
    const text = await loadExternalContent();    
    console.log(text);
}
console.log('it will call function');
getContent();
console.log('it called function');