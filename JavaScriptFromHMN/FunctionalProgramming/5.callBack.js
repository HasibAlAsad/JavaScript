function sample (a , b, cb){
    var c = a + b       //=13
    var d = a - b       // =-3
    var result= cb(c,d)
    return result
}

function sum (a,b){
    return a+b      //=10
}

var sumRes = sample(5,8,sum)
console.log(sumRes)


var subRes=sample(5,8, function(x,y){
    return x-y
})
console.log(subRes)

var multiRes = sample(5,8, function(x,y){
    return x*y
})
console.log(multiRes)