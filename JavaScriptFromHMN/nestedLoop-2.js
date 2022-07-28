
            // *
            // * *
            // * * *
            // * * * *
            // * * * * *
            // * * * *
            // * * *
            // * *
            // *
// var n = 5
// for (let i = 1; i <= n; i++) {
//     let res = "";
//   for (let j = 1; j <= i; j++) {
//     res = res+ "* ";
//   }
//   console.log(res);
// }
// for(var i=1;i<=n;i++){
//     var res = ''
//     for(var j = 1; j<=n-i; j++){
//         res = res +  '* '

//     }
//     console.log(res)
// }



                    //     *
                    //    ***
                    //   *****
                    //  *******
                    // *********
// var n=5
// for(var i=1; i<=n;i++){
//     var str =''
//     for(j=1; j<=n-i;j++){
//         str += ' '
//     }
//     for(var k=1; k<=2*i - 1; k++){
//         str += '*'
//     }
//     console.log(str)
// }

                // *********
                //  *******
                //   *****
                //    ***
                //     *

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let string = "";
//     for (let j = 0; j < i; j++) {
//         string += " ";
//     }
  
//     for (let k = 1; k <= 2 * (n-i) - 1; k++) {
//         string += "*";
//     }
//     console.log(string);
// }

                //     *
                //    ***
                //   *****
                //  *******
                // *********
                //  *******
                //   *****
                //    ***
                //     *
var n=5
for(var i=1; i<=n;i++){
    var str =''
    for(j=1; j<=n-i;j++){
        str += ' '
    }
    for(var k=1; k<=2*i - 1; k++){
        str += '*'
    }
    console.log(str)
}
for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
        string += " ";
    }
  
    for (let k = 1; k <= 2 * (n-i) - 1; k++) {
        string += "*";
    }
    console.log(string);
}