// let n= 10

// if (n > 5){
//     throw new Error('N is greater than 5')
// }


                // ********* Error handling with if else *********

// let n = Number.parseInt(45.50)
// let n2 = Number.parseInt('hfjbwhfbw')  // ({}) etc dile 

// console.log(n)      // 45
// console.log(n2)     // NaN    : garbage value

// garbage value ashle if else diye error handle korte hobe.. javascript runtime, Error show korle if else diye handle korte hobe na

// function changeToInt (v){
//     let result = Number.parseInt(v)
//     if (!result){           // NaN ===Nan : false tai (result === NaN) use korle if er condition e dhukbe na
//         // console.log('Please provide a value which is able to convert into integer')  //way (1)
//         // return 'Please provide a value which is able to convert into integer'
//         // return  //way (1)
//     }
//     return result
// }
// let res = changeToInt('45.59')
// console.log(res)

// let res2 = changeToInt('jkfsjdfnjk')
// console.log(res2)




                // ************* Try Catch Error handling **********
// function makeWords (text){
//     try {
//         let str = text.trim()
//         let words = str.split(' ')
//         return words
    
//     } catch(e) {                // e =  error object .. can use any word insted e
//         // console.log(e)
//         // console.log(e.message)       // only msg ta dibe
//         console.log('Plz provide a valid ')
//     }

// }
// // let words = makeWords('    i m hasib   ')
// let words = makeWords(83)
// console.log(words)




