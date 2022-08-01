// function greet (msg){
//     function nameFunc (name){
//         return msg +' '+name +'!'
//     }
//     return nameFunc
// }
// var gm = greet('Good Morning')
// // console.log( gm )
// console.log( gm('Hasib') )


// var gn = greet('Good Night')
// console.log( gn('Talha') )



// function baseF (num){
//     function powF (num1){
//         var res = 1
//         for( var i=0;i< num1;i++){
//             res *= num
//         }
//         return res
//     }
//     return powF
// }

// var _2base = baseF(2) 
// console.log(_2base(10))


function baseF (num){
    return function (num1){
        var res = 1
        for( var i=0;i< num1;i++){
            res *= num
        }
        return res
    }
}

var _2base = baseF(2) 
console.log(_2base(10))


console.log(baseF(5)(4))            // currying invoke