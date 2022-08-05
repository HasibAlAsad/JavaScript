var person = {
    name: 'Hasib AL asad'
}

// console.log(person) 


// for (var i in person){
//     console.log(i)
// }

// console.log(Object.keys(person))



// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)          // sobgula true ashbe

// var baseObj = Object.getPrototypeOf(person)   //parent obj theke pawa prototype gular descriptor dekhte age obj er proto k var e store korte hobe
// var descriptor = Object.getOwnPropertyDescriptor(baseObj,'toString')
// console.log(descriptor)



Object.defineProperty(person,'name',{
    configurable: false,
    enumerable: false,
    writable: false,
    value: 'hsb'
})
var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor)