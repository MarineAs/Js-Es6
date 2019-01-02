/*let long="";
switch(long){
    case 2 :
        long = 10;
        break;
    case 3:
    case 4:
        long = 5;
        break;
    default

}
(a==b) ? true:false
*/

const increment = (function (){
    return function increment(num, value=1){
        return num + value;
    }
})();
console.log(increment(5,2));
console.log(increment(5));

const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b)=>a+b,0);
    }
})();
console.log(sum(1,2,3))