class User {
    constructor (name,age){
        this.name = name;
        this.age = age;

    }
    sayName() {
        console.log(`Person ${this.name} said his name`);
    }
};
let UserAshot = new User('Ashot', 10);
let UserMika = new User('Mika', 5);
class Child extends User{
    constructor(name,age){
        super(name,age)
    }
   play(){
        console.log(`${this.name} is playing football`)
    }
    saying(){
        console.log(`${super.sayName()}`)
    }
};
let Armen = new Child('Armen',2);
console.log(Armen);
Armen.saying();
Armen.play();
console.log(UserMika,UserAshot);
UserAshot.sayName();

class Car {
    constructor(brand,colour,vehicals,doors){
        this.brand = brand;
        this.colour = colour;
        this.vehicals = vehicals;
        this.doors = doors;
    }
    run(){
        console.log(this.brand+"It is also run");
        return this;
    }
    stop(){
        console.log(this.doors);
        return this
    }
}
//class childCar extends Car
let Honda = new Car ('honda','red',5,2);
let Hon = new Car ('honda','red',5,6);
let volvo = new Car('volvo','pink',8);
console.log(Honda);
console.log(Honda);
console.log(Honda);
console.log(Honda);
console.log(Hon);
Honda.run().stop();
console.log(volvo);

















class UserInfo {
    constructor (name,email,age){
        this.name =name;
        this.email =email;
        this.age =age;
        this.sum = 0;
    }
    count (){
        console.log('Hi');
        return this;
    }
    add(){
        console.log('bye');
        return this;
    }
    counted(){
        this.sum++;
        console.log('sum is'+this.sum )
        return this
    }
}
let Ashot = new UserInfo('Ash','@mail.com',12);
Ashot.count().add().counted()
Ashot.count().add().counted()
Ashot.count().add().counted()
Ashot.count().add().counted()


//class Children extends Ashot;