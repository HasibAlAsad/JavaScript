        // **** 1. Pure Function returns the same result if given same arguments.
        // **** 2. It doesn't cause any observable side effect.


function squar(n){          // Pure function
    return n*n
}

console.log(squar(3))
console.log(squar(3))


var n = 10
function change() {
     n = 100                // NOT a PURE FUNCTION : changing value is a side effect
}
change()
console.log(n)



var point = {
    x: 45,
    y: 90
}
function printPoint (point){
    point.x = 30                // NOT a PURE FUNCTION : changing value is a side effect
    point.y = 60

    return point
}
var p = printPoint(point)
console.log(p)
