var arr =[1,2,3,4,5]
// var sum = arr.reduce(function(prev,curr){
//     return prev + curr
// },0)

// var max = arr.reduce(function(prev,curr){
//     return Math.max (prev,curr)
// },0)
// console.log(sum)
// console.log(max)

function myReduce (arr, cb ,accumulator){
    for(var i =0;i<arr.length;i++){
        accumulator=cb(arr[i],accumulator)
    }
    return accumulator
}
var sum = myReduce(arr,function(prev,curr){
    return prev + curr
},0)                // given accumulator=0 initially
console.log(sum)



var max = myReduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},0)
console.log(max)
var min = myReduce(arr,function(prev,curr){
    return Math.min(prev,curr)
},arr[0])
console.log(min)