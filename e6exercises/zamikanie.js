/*function sumAll(){
    sum = 0;
    for (let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    console.log(sum);
}
sumAll(4,5,6);
sumAll(4,5,6,7);
sumAll()


console.log(a);
var a=10;
console.log(a);*/

/*x = 10;
var y = 20;
function F( a, b, c){
    console.log(a, b, c, z);
var z = 20;
z++;

p = 30;
return a+ b+ c;
}
F(2,3)*/

///////////

var x = 20;
function F1(){
    var x = 50;
    F2(10);

}
function F2(y){
    console.log(x+y);
}
F1();
y = 500;
function F11(){
    var p =5,
        d= 50;
    function F22(a){
        var x = 10;
        debugger;
        return p+a;
    }
    return F22(10);
}
var result = F11();
console.log(result);






