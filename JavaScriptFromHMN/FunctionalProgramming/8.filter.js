var arr = [1,2,3,4,5,6,7,8,9]

// var filteredArr = arr.filter(function(value){
//     return value % 2==0                  // boolean value return kore
// })
// console.log(arr)
// console.log(filteredArr)

function myFilter (arr,cb){
    var newArr=[]
    for(var i =0;i<arr.length;i++){
        if(cb(arr[i],i,arr) ){
            newArr.push(arr[i])
        }
        
    }
    return newArr
}
console.log(arr)
console.log(myFilter(arr,function(value){
    return value % 2== 0                        // boolean value return kore
}))

console.log(arr)
console.log(myFilter(arr,function(value){
    return value % 2== 1
}))

console.log(arr)
console.log(myFilter(arr,function(value){
    return value > 4
}))