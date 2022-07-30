var arr = [1,2,3]

// var sqrArr = arr.map(function(value,index,arr){   //  parameter hishebe na dileo hobe cz value,index, arr console korbe na
//     // return Math.round(Math.random() * 100)
//     return value * value
// })
// console.log(arr)
// console.log(sqrArr)

function myMap (arr,cb){
    var newArr =[]
    for ( var i= 0; i< arr.length ; i++){
        // var temp = arr[i]* arr[i]
        var temp=cb(arr[i],i,arr)
        newArr.push(temp)
    }

    return newArr
}
 var sqr = myMap(arr,function(value,index,arr){
    return value*value
 })
 console.log(arr)
 console.log(sqr)

 var cube = myMap(arr,function(value){
    return value*value*value
 })
 console.log(arr)
 console.log(cube)

 var mten = myMap([3,4,5,3],function(value){
    return value+10
 })
 console.log(mten)