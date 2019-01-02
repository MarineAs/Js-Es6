/*
function(a, b, ...theArgs) {
    // ...
}



*/
///////////////
const cars = ['camro', 'nova','A5'];

//const camaro = cars[0];
const [,camaro]=cars;
console.log(camaro)
const [camro,...rest]=cars;
console.log(rest)

//////////////////rest operators/////
const sum = (function (){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(1,2,3,5,6,7))
function args (arg1,arg2,arg3){
    const arguments= [arg1,arg2,arg3]
    console.log(arguments)
    console.log(typeof(arguments))
}
args('5','10','25');
function arg (...args){
    console.log('arg'+args)
    console.log(typeof(args))
};
arg('5','10','232')

/////spread operator
const brand =['Ford','Bmw'];
const brand1 = ['Audi','Nissan'];
//const newArr=brand.concat(brand1);
//newArr.push('Hi')
const newArr = [...brand,...brand1,'Hi'];
console.log(newArr);

////////////////////////////
function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5,3,7,1))

///////////////////
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

////////////
const A = {
    a:'new',
    b:'old'
}
const B = {
    bc: 'create'
}
let c ={
    ...A,
    ...B
}
console.log(c);


/////////////
const ary = [5,6,7,9,10];
function sumi(...arg){
    return arg.reduce((a,b)=>a+b,0);
}
console.log(sumi(...ary))


///////
function h1(num, ...rest){
    console.log(num ,rest[2])
}
h1(1,2,5,4,8,6)