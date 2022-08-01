// ********** make this func into currying func *********

//    function sum (a,b,c){
//             return a+b+c
//         }

function sumCurry (a){
    return function (b){
        return function(c){
            return a+b+c
        }
    }
}

var res = sumCurry(2)(3)(4)
console.log( res )