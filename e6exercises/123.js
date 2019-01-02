const arr = [1, 2];
Object.freeze(arr);
arr[0] = 10;
console.log(arr);
// const obj = {'a':1, 'b':2};
// Object.freeze(obj);
// obj.a = 10;
// console.log(obj.a);

const x = 20;

console.log(x);

let att=123;

 att = 256;
 console.log(att)