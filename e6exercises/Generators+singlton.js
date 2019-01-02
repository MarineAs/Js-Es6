function *brands(){
    yield 'Ford';
    yield 'Nisa';
    yield 'Toyota';
}

const get = brands();

//console.log(get.next())
// //console.log(get.next())
// //console.log(get.next())
// //console.log(get.next())

//1. funkcian kanchel 1 angam
//2.
let fun = function (){
    get.next().value;
}

var singlton = (function (){

    while (true){
        var mn ;
        if(get.next().done){
            return mn =fun();
            break;
        }
        console.log(mn, ', ');
    }

})()


console.log(fun())
/*let array = [];

for (let i of brands()){
  //  array.push(i)
array = [...array,i]
}
console.log(array);*/