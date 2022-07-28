var arr =[1,2,3,4]
var arr2 =[1,2,4,4]


// console.log(arr.join(' | '))        // 1 | 2 | 3 | 4  string ashbe
// console.log(arr.fill(8))               //[ 8, 8, 8, 8 ]

// var arr3 = arr.concat(arr2)
// console.log(arr3)

// console.log(Array.isArray(arr))

                    // ****** to dupli******
                //   var b = arr  doing this will create prob called mutability-immutability
var arr4 = Array.from(arr)
console.log(arr4)