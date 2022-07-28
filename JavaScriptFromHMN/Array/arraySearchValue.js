
var arr=[12,43,45,62,13,57,854,8,9,4]

var find = 5
// var count = 0

// for (var i = 0; i< arr.length;i++){
//     if(arr[i]== find){
//         console.log('Data found at index '+ i)
//         count++
//         break
//     }
// }
// if (count== 0){
//     console.log('Data NOT Found' )   
// }

var isFound = false

for (var i = 0; i< arr.length;i++){
    if(arr[i]== find){
        console.log('Data found at index '+ i)
        isFound= true
        break
    }
}
if (!isFound){
    console.log('Data Not Found' )   
}