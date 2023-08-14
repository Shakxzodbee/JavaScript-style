'use strict'

function Car(name , color , mph){
    this.name = name
    this.color = color
    this.mph = mph
    this.isAirbag = true
    this.speed = function(){
        console.log(`Speed of car ${this.name} is ${this.mph}`);
    }
}

Car.prototype.sayHello = function(){
    console.log(`car name of ${this.name} say hello`);
}
const bmw = new Car('BMW' , 'red', 32);
const merc = new Car('Mers', 'black' , 40)

bmw.sayHello()
merc.sayHello()

bmw.speed()
merc.speed()

console.log(bmw);
console.log(merc);
