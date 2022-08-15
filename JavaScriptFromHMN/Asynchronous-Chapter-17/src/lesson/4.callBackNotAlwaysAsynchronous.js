const arr = [1,2,3,4]

// let sqrArr = arr.map(function (v){
//     return v*v
//})
let sqrArr = arr.map(v => v*v )         // Synchronous function

console.log(sqrArr)

// prob (1)
// function asyncMap (ar, callback){
//     return ar.map(v => {
//         setTimeout(callback,0)   //Asynchrnous function : akhane v var ta callback passe na
//     })
// }

// let qbArr = asyncMap(arr, v => v*v*v)    //(4) [undefined, undefined, undefined, undefined]
// console.log(qbArr)


// prob (1) sol
function asyncMap (ar, callback){
    return ar.map(v => {
        // setTimeout(callback.bind(null,v),1000)  // prob(1) bind sol
        setTimeout(() => callback(v),1000)             //// prob(1) arrow func sol
    })
}
let qbArr = asyncMap(arr, v => {
    console.log(v*v*v)
})   

// AJAX by callback e bar bar request pathanor time e problem face korte hoi tai amra promise use korbo..