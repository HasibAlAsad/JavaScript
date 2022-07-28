            // *****
            // *   *
            // *   *
            // *   *
            // *****

// var n = 5
// for(var i = 1; i<=n; i++){
//     var res = ''
//     for(var j = 1;j<= n;j++){
//         if(i==1 || i==n){
//             res+= '*'

//         }
//         else{
//             if(j==1 || j==n){
//                 res+= '*'
//             }
//             else{
//                 res+=' '
//             }
//         }
//     }

//     console.log(res)
// }

                // *
                // **
                // * *
                // *  *
                // *   *
                // ******

// var n = 5
// for (var i = 1; i <= n; i++){
//     var str =''
//     for (var j=1; j<= i; j++){
//         if(i==1 || i==n){
//             str += '*'
//         } else {
//             if(j==1 || j==i){
//                 str += '*'
//             } else 
//             str += ' '
//         }

//     }
//     console.log(str)
// }

                            //     *
                            //    * *
                            //   *   *
                            //  *     *
                            // *********
var n =5
for(var i=1; i<= n;i++){
    var str =''
    for(var j=1; j<=n-i;j++){
        str+=' '
    }
    for(var k=1 ;k<= 2*i-1;k++){
        if(i==1 || i==n){
            str += '*'
        }else {
            if(k==1 || k== 2*i-1){
                str+='*'
            } else
                str+=' '
        }
    }

    console.log(str)
}