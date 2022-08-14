
                // ****** Request pathanor way AJAX er maddhome ********

// const xhr = new XMLHttpRequest()

// xhr.open ('get','https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange = function (e){
//     if(xhr.readyState=== 4){
//         if(xhr.status===200){       //status code 200 = sob ok
//             // console.log(xhr.response)           // JSON string akare ashbe.. aivabe data ashle use korte parbo na.. tai javascript array te convert korte hobe
//             let res = JSON.parse(xhr.response)      // JSON string convert into array
//             console.log(res)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()


            // ******** Request pathanor function : uporer code ta k func banano ***********

// function getRequest (url , callback){
//     const xhr = new XMLHttpRequest()
//     xhr.open ('get', url)

//     xhr.onreadystatechange = function (e){
//         if(xhr.readyState=== 4){
//             if(xhr.status===200){       //status code 200 = sob ok
//                 let res = JSON.parse(xhr.response)      // JSON string convert into array
//                 callback (null,res)
//             } else {
//                 callback(xhr.status,null)
//             }
//         }
//     }

//     xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users' , (error, res) => {
//     if(error){
//         console.log(error)
//     } else {
//         console.log(res)
//         // res.forEach( name => {           // name alert korte
//         //     alert(name.name)
//         // })
//     }
// })


// getRequest('https://jsonplaceholder.typicode.com/posts' , (error, res) => {
//     if(error){
//         console.log(error)
//     } else {
//         // console.log(res)
//         res.forEach(element => {
//             console.log(element.title)
//         })
//     }
// })


function getRequest (url,callback){
    const xhr = new XMLHttpRequest()
    xhr.open('get',url)
    
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4){
            if(xhr.status=== 200){
                let resp = JSON.parse(xhr.response)
                callback(null, resp)
            } else {
                callback(resp, null)
            }
        }
    }
    xhr.send()
}

let result = getRequest('https://jsonplaceholder.typicode.com/posts', (error,response)=> {
    if (error){
        console.log(error)
    } else {
        console.log(response)
    }
})

