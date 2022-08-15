// function myPromise (){
//     return Promise.resolve('test value')
// }
// console.log(myPromise())



// async function myPromise (){
//     // return Promise.resolve('test value')
//     return 'test'
// }
// console.log(myPromise())
// myPromise().then(v => console.log(v))



// let p1 = Promise.resolve(' i am a promise')
// function myAsyncFun (){
//     p1.then(v => console.log(v))
// }
// myAsyncFun()

// async await diye niche

// let p1 = Promise.resolve(' i am a promise')
// async function myAsyncFun (){
//     // p1.then(v => console.log(v))
//     let v = await p1
//     console.log(v)
// }
// myAsyncFun()



// let p1 = new Promise (resolve => {
    // setTimeout(resolve, 3000, 'test value')
// })
// async function myAsyncFun (){
    // let v = await p1            // p1 k 3 sec delay korbe thn resolve hobe .. await resolve na howa porjonto console.log('test') e jete dibe na
    // console.log('test')
    // console.log(v)
// }
// myAsyncFun()



// async function fetchData (){
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await res.json()
//     // console.log(data)
//     let names = data.map(n => n.name)
//     console.log(names)
// }
// fetchData()


                // any error occurs
// async function fetchData (){
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/user')      // users er s missing tai catch block e jabe
//     let data = await res.json()
//     // console.log(data)
//     let names = data.map(n => n.name)
//     console.log(names)
//     } catch (e) {
//         console.log(e)
//     }
// }

// fetchData()




// multiple promise

let promises = [Promise.resolve('one'),Promise.resolve('two'),Promise.resolve(3)]

async function promiseAll (){
    let result = await Promise.all(promises)
    console.log(result)
}

promiseAll()