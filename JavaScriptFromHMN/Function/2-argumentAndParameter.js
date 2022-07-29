// function add(a,b){          // a,b parameters
//     var res = a+b
//     console.log(res)
// }

// add(10,20)                  // 10,20 arguments
// add(3,5)

// function sumOfArray(arr){
//     var sum = 0
//     for(var i =0; i< arr.length ; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }

// sumOfArray([1,2,3,4,5])         // arg must be an array

// var arr2 =[13,34,53,64,758,35,24,-23]
// sumOfArray(arr2)

// function test(a,b,c){
//     console.log(arguments)          // func define korle argument obj func e auto create hoi
//     // console.log(typeof a) // undefined
//     // console.log(typeof b) // undefined
//     // console.log(typeof c) // undefined
// }
// test()
// test(10,2,30)

function test(){        // parameter na diyeo argument diye kaj kora jai : index 0 theke start hoi: as array
    // console.log(arguments)          // func define korle argument obj func e auto create hoi
    // console.log(typeof a) // undefined
    
    for( var i=0; i< arguments.length; i++){
        console.log(arguments[i])
    }
}
// test()
// test(10,2,30)

function addAll(){
    var res = 0
    for (var i =0; i < arguments.length; i++){
        res += arguments[i]
    }
    console.log(res)
}

addAll(10,20)
addAll(100,20,35,354)
