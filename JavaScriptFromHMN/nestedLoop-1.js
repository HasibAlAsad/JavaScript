            // 1
            // 1 2
            // 1 2 3
            // 1 2 3 4
            // 1 2 3 4 5

// var n = 5

// for( var i=1; i <= n; i++){
//     var result = ''
//     for( var j = 1; j <=i; j++){
//         result = result + j + ' '
                
//     }
//     console.log(result)
// }


            // 1 2 3 4 5
            // 1 2 3 4
            // 1 2 3
            // 1 2
            // 1



// var n = 5
// for(var i=1;i<=n;i++){
//     var res = ''
//     for(var j = 1; j<=n+1-i; j++){
//         res = res + j + ' '

//     }
//     console.log(res)
// }


            // * * * * * 
            // * * * * * 
            // * * * * *
            // * * * * *
            // * * * * *

// var n = 5

// for(var i = 0; i<n ; i++){
//     var res =''
//     for(var j=0 ; j<n; j++){
//         res= res+"* "
//     }
//     console.log(res)
// }

            // *
            // * *
            // * * *
            // * * * *
            // * * * * *

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//   for (let j = 1; j <= i; j++) {
//     res = res+ "* ";
//   }
//   console.log(res);
// }


            // * * * * *
            // * * * *
            // * * *
            // * *
            // *


// var n = 5
// for(var i=1;i<=n;i++){
//     var res = ''
//     for(var j = 1; j<=n+1-i; j++){
//         res = res +  '* '

//     }
//     console.log(res)
// }

                //     *
                //    **
                //   ***
                //  ****
                // *****

var n=5
for(var i=1;i<=n;i++){
    var str =''
    for(var j=1;j<= n-i;j++){
        str += ' '
    }
    for(var k = 1; k<=i;k++){
        str +='*'
    }
    console.log(str)
}