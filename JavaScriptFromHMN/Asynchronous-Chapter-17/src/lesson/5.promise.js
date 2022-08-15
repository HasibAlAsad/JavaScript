// const p1 = new Promise((resolve,reject) => {
//     setTimeout(resolve , 5000 , 'one')
// })

// const p2 = new Promise((resolve,reject) => {
//     setTimeout(resolve , 3000 , 'two')
// })

// // console.log(p1)             // promise {pending}      5 sec er moddhe
// // console.log(p2)             // promise {resolved two}   3 sec pore ata pore ashbe

// // Now Promise handling : getting value 
// p1.then((v)=>{
//     console.log(v)
// })

// p2.then(v =>{
//     console.log(v)
// }).catch((e) => {                   // catch er position akahne
//     console.log(e)
// })




                // use case of promise

function getIphone (isPassed){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(isPassed){
                resolve('i got an iphn')
            } else {
                reject(new Error('u have failed'))
            }
        },2000)
    })
}

getIphone(true)
    .then ((str) => {
        console.log(str)            // true hole ata
    })
    .catch((e) => {
        console.log(e.message)      // false hole ata
    })