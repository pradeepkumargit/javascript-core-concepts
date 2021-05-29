const xyz = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000);
}

const abc = () => {
    console.log('Hey there');
    xyz();
    console.log('The end');
}

abc();

// Promise
const promise = new Promise((data) => { 
  data(1);
  data(2);
  data(3); 
})
.then(element => console.log('Promise' + element));

//Promise 1


//Observable
const observable = new Observable((data) => {
    data.next(1);
    data.next(2);
    data.next(3);
}).subscribe(element => console.log('Observable ' + element));
//Observable 1
//Observable 2
//Observable 3