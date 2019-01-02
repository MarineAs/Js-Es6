class Animal {
    constructor (name,weight){
        this.name = name;
        this.weight = weight;

    }
    eat (){
       return `${this.name}is eating`;
    }

    sleep(){
        return `${this.name} is going to sleep`
    }
    wakeUp(){
        return `${this.name} is waking up`
    }
}
class Makak extends Animal{
    constructor(name,weight){
        super(name,weight)
    }

}

class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }

    climbTrees() {
        return `${this.name} is climbing trees!`;
    }

    poundChest() {
        return `${this.name} is pounding its chest!`;
    }

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`;
    }

    dailyRoutine() {
        return `${this.wakeUp()}${this.poundChest()} ${super.eat()} ${super.sleep()}`;
    }
    dailyRoutine1() {
        return `${this.wakeUp()}${this.poundChest()} ${this.eat()} ${this.sleep()}`;
    }

}
let Mako = new Makak('Mako',20);
console.log(Mako.wakeUp());
function display(content) {
    console.log(content);
}
class Gorilla1 extends Animal{
    constructor
}
const gori= new Gorilla1('hop',20);
console.log(gori);
const gorilla = new Gorilla('George', '160Kg');
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());
display(gorilla.dailyRoutine());
display(gorilla.dailyRoutine1());
