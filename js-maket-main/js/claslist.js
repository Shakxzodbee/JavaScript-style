'use strict'


// claslar nomi doim katta xarf blan yoziladi 


class Car {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.speed = speed
    }

    calcSpeed(){
        return this.speed * 100
    }
}

const bmw =  new Car('BMW ' , 'Black' , 300)

console.log(bmw);