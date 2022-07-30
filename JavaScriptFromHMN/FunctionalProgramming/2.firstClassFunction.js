                // to be a First class function , func need to maintain following rules.

function add(a,b){
    return a+b
}

                    // 1. a function can be stored in a VARIABLE
var sum = add
console.log(sum(5,6))
                    // 2. a function can be stored in an ARRAY
var arr = [5]
arr.push(add)
console.log(arr) 
console.log(arr[1](100,300))

// var arr1 = [4]
// arr1.push(add(3,5)) : my pracTs to get whole array
// console.log(arr1)

                    // 3. a function can be stored in a OBJECT
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(200,300))

                    // 4. we can create function as we need
setTimeout(function(){
    console.log('i have created')
},500)  // 500 milli sec = 0.5 sec
