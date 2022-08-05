function Person (name){
    this.name = name
    
}

var p1 = new Person ('hasibbbbb')


// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype) 



console.log(Object.getPrototypeOf(p1)=== Person.prototype)

Person.prototype.PI = 3.1416
var p2 = new Person ('talha')
console.log(p1)
console.log(p2)

// go to broser's console 
// var arr = []
// arr

// Array.prototype.myMethod = function(){}
// arr

// var anotherArr = []
// anotherArr