function sum (num){
    if (num == 0){              // breakpoint
        return 0
    }
    return num + sum (num -1)   // tricks
}
console.log(sum(6))


function fact (num){
    if (num == 1){              // breakpoint
        return 1
    }
    return num * fact (num -1)   // tricks
}
console.log(fact(4))




var arr = [1,2,3,4,5]
function sumOfArray(arr , lastIndex){
    if (lastIndex<0){
        return 0
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex -1)
}
console.log(sumOfArray(arr,arr.length-1))