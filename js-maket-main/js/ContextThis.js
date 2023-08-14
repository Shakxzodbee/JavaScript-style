'use stcirt'

// context this  - xar doim nimagadir qaram(yopishadi)

// function logger(){
//     console.log(this);
// function sum(){
//     return this.a + this.b
// }
// }
// logger()

// 1 -) Oddiy functionni contexti yani this xar doim window global objectga qaram boladi 
//  yani osilda. Agarda qat'iy rejim yoqilgan bolsa (use strict) context undefined ga teng


//Closure

// const a = 4

// function log(){
//     const a = 5
//     console.log(a);
// }
// log()


// ***************_________________************************

// 2 -) Context this objectni ichidagi metodda - objectni o'ziga teng 

// const Obj = {
//     x:10,
//     y:15,
//     sum:function(){
//         console.log(this);
//     }
// }
// Obj.sum


// 3-) context this funksiya kostruktorda yangi objectni ekzempyariga teng 

// function Car(name , color){
//     this.name = name,
//     this.color = color,
//     this.isAirbag = true
// }

// const bmw = new Car('BMW' , 'Black')