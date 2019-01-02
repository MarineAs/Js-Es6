/*function check(num){
    return num>0 ?"psoitiv" : num<0 ? 'negative': 'zero'
}
console.log(check(0));*/
const arr = [true, 2];
//Object.freeze(arr);
arr[0] = 10;
console.log(arr);
const obj = {'a':1, 'b':2};
Object.freeze(obj);
obj.a = 10;
console.log(obj.a);

const x = Object.freeze(['a'])
x.push('b')
console.log(x) //

