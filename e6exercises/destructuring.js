//////////
let vox = {x:3.4, y:5 , z:10};
let x = vox.x;
let y = vox.y;
let z = vox.z;
    const {x:a , y:b, z:k}=vox;
console.log(a,b,k)
/////////////////
const users = [
    {name:'Fifo', lastname:'Jones', age:30},
    {name:'Miko', lastname:'Load', age:50},
    {name:'Edo', lastname:'Khones', age:15},
];
const [{lastname}]  =users;
console.log(lastname);

const useri = {
name:['Fifo', 'Miko',"hello"]
}

const {name:[name0]}=useri;
    console.log(name0)
////////////
const temp = {
        tod : 30,
        tom : 28
}
function gettom(tempo){
        const {tom:tomtemp} = tempo;
        return tomtemp;
}
console.log('tom'+gettom(temp))
///////////////////
const obj ={
    today:{min:20, max:50 },
    tomorrow:{min:10, max :60}
}
function gettommax(ob){
        const {tomorrow:{max:maxtomorrow}}=ob;
        return maxtomorrow
}
console.log(gettommax(obj));
/////////////////////
const [l ,m,n]=[1,2,4,5,6,7];
console.log(l,m,n)


//////////
const card={
    min:10,
    max:100,
    average:50
}
function sum({min,max}){
    return min+max
}
console.log('sun is'+sum(card));

const sum2 = (function (){
    return function sum2({min,max}){
        return min+max
    }

})();
console.log('sum issss'+sum2(card))