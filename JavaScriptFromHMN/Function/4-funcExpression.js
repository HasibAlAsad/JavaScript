var addition= function(a,b){    // anonymous func kono var e store kora hole seta k func expression bole
    return a+b
}

var x= addition(23,23)
console.log(x)



                    // ******* why will we use function expression ***********
                    setTimeout(function(){
                        console.log('I will call after 5 secs')
                    },5000 )  // 5000 mili sec = 5 sec


var another = addition
var y = another(22,22)
console.log(y)

var z= addition(25,25)
console.log(z)