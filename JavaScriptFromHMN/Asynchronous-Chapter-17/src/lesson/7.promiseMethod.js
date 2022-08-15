const delay = (s) => {
    return new Promise (resolve => setTimeout(resolve, s*1000))
}

// delay(2).then(()=> console.log('2 sec delay'))
// delay(1).then(()=> console.log('1 sec delay'))
// delay(3).then(()=> console.log('3 sec delay'))
// delay(2).then(()=> console.log('2 sec delay'))
// delay(5).then(()=> console.log('5 sec delay'))

// let p1 = Promise.resolve('test')             //Promise.resolve
// p1.then(v => console.log(v))


// let p2 = Promise.reject('REJECT')            //Promise.reject
// p2.catch(e => console.log(e))


// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')
// let promiseArr = [p1,p2,p3]
// Promise.all(promiseArr)              //Promise.all()
//     .then( arr => {
//         console.log(arr)
//     })


let p1 = new Promise(resolve => {
    setTimeout(resolve, 5000, 'one')
})
let p2 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'two')
})
let p3 = new Promise(resolve => {
    setTimeout(resolve, 4000, 'three')
})

let promiseArr =[p1,p2,p3]
Promise.all(promiseArr)
    .then( arr => {
        console.log(arr)            // 5 sec por ['one', 'two', 'three'] ashbe.. mane sob gula resolve hobe thn akbare ashbe Promise.all() method e

    })

Promise.race(promiseArr)
    .then(v => console.log(v))          // two ashbe.. cz atar time kom howai race e jitse..baki gula ignore korbe
    

    