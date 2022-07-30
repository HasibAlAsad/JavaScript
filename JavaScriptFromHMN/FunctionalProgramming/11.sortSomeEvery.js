var arr = [3,2,5,4,24,63,67,4,0,1,-3,-5,-10]
var persons = [
    {
        name: 'A',
        age: 23
    },
    {
        name: 'B',
        age: 20
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 19
    }
]

// arr.sort()          // negative value er jonno wrong ashbe
// console.log(arr)

// persons.sort()
// console.log(persons)

arr.sort(function(a,b){     
    if(a>b){
        return 1            // ascending 
    } else if(a<b){
        return-1
    } else {
        return 0
    }
})
console.log(arr)

arr.sort(function(a,b){     
    if(a>b){
        return -1       //descending
    } else if(a<b){
        return 1
    } else {
        return 0
    }
})
console.log(arr)

persons.sort(function(a,b){
    if (a.age > b.age){
        return 1
    } else if (a.age < b.age){
        return -1
    } else {
        return 0
    }
})
console.log(persons)

            // ********if every num is even*******

var res1= arr.every(function(value){
    return value%2 ==0 
})
console.log(res1)

var res2= arr.every(function(value){
    return value>0 
})
console.log(res2)

var res3 = arr.some(function(value){
    return value%2 == 0
})
console.log(res3)

var res4 = arr.some(function(value){
    return value < 0
})
console.log(res4)