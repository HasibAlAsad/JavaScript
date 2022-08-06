var canWalk = {
    walk: function(){
        console.log('Walking...')
    }
}

var canEat = {
    eat: function(){
        console.log('Eating...')
    }
}

                // ********** Composition with object literal **********

                // var person = Object.assign({}, canWalk,canEat)           
// person.name = 'Hasib Al Asad'
// console.log(person)


                // ********** Composition with Construtor **********

// function Person (name){
//     this.name = name
// }

// Object.assign(Person.prototype, canWalk,canEat)

// var p1 = new Person('HASIB')
// console.log(p1)


                // ********** Composition er mixing function **********

function Person (name) {
    this.name = name 
}

function mixing (target,...source){
    Object.assign(target, ...source)
}

mixing(Person.prototype, canWalk,canEat)

var p2 = new Person('talha')
console.log(p2)

function Fish (name){
    this.name = name
}

var canSwim = {
    swim: function (){
        console.log('Swimming...')
    }
}

mixing (Fish.prototype, canEat,canSwim)

var fish1 = new Fish('Gold FIsh')
console.log(fish1)