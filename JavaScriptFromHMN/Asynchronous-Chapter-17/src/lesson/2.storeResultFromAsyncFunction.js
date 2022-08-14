// function sayMyName (name){
//     let result
//     setTimeout(()=>{                //setTimeout func ta asynchronous and result upore undefined
//         result = name                // assign howar 
//         console.log('i have called')
//     },2000)
//     return result 
// }

// let output = sayMyName('hasib')
// console.log(output)              //undefined | i have called


function sayMyName (name){
    
    setTimeout(()=>{               
        console.log(name)
    },2000)
}

console.log(sayMyName('hasib')) 
