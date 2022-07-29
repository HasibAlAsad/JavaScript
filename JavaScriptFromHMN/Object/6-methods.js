var obj ={
    math : 90,
    phy : 80,
    chem: 85
}

console.log(Object.keys(obj))       // for KEYS IN ARRAY
console.log(Object.values(obj))     // FOR VALUES IN ARRAY
console.log(Object.entries(obj))    //AS 2 DIM ARRAY

console.log(obj)
var obj2 = Object.assign({}, obj)
obj2.math = 95
console.log(obj2)