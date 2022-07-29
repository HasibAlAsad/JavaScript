function addAll(){
    var res = 0
    for (var i =0; i < arguments.length; i++){
        res += arguments[i]
    }
    return res              // CAN'T USE consol.log(res) cz its not a returning value.
}

var a =addAll(10,20)
var b =addAll(100,20,35,354)
console.log(a,b)  

// **** Processing unit er kisu na kore return kora jai *********

function person (name,email){
    return {
        Name: name,
        Email: email
    }
}

var p1 = person('Hasib','Hasibaveiro007@gmail.com')
var p2 = person('Talha','talha007@gmail.com')
console.log(p1)
console.log(p2)