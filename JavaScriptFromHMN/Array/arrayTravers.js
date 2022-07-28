var arr = [1,2,3,4,5,6,7,8,9,23,45,63,45,44,55,34]


// for (var i=0; i < arr.length; i++){
//     console.log(arr[i])
// }


// var sum=0
// for (var i=0; i < arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum)


// for (var i=0; i < arr.length; i++){
//     if( arr[i] % 2 == 0 ){
//         console.log(arr[i])
//     }
// }

sum=0
for (var i=0; i < arr.length; i++){
    if( arr[i] % 2 == 0 ){
        sum += arr[i]
    }
}
console.log(sum)