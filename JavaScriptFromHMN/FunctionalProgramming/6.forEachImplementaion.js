 var arr = [1,2,3,4,5]
// sum=0
// arr.forEach(function(value,index,arr){  // forEach array er built in method
//     // console.log(value,index,arr)
//     sum += value
// })
// console.log(sum)

function forEach (arr, cb){
    for( var i=0; i< arr.length; i++){
        // console.log(arr[i],i,arr)
        cb(arr[i],i,arr)
    }
}
sum = 0
forEach(arr , function(value,index,arr){
    console.log(value,index,arr)
    sum += value
})
console.log(sum)

forEach(arr, function(value,index,arr){
    arr[index]= value + 5
})
console.log(arr)