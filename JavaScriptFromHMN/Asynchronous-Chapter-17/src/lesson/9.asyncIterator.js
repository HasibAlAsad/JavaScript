let asyncIterable = {
    [Symbol.asyncIterator](){
        let i = 0
        return {
            next(){
                if(i< 5){
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
}

let iterate = asyncIterable[Symbol.asyncIterator]()
// console.log(iterate.next())      //resolve promise dibe

;(async function (){                // ifi(immediatly func invoking) er shamne (;) ata dewa lagbe.. exeption
    // let v = await iterate.next()
    // console.log(v)
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
})()


