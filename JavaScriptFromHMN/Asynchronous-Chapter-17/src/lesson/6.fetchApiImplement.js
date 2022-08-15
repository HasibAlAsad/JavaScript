const BASE_URL = 'https://jsonplaceholder.typicode.com'

// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())                // res.json arekta promise provide korbe jar jonno chain akare arekta .then nite parbo
//     .then(data => {
//         console.log(data)
//     })
//     .catch((e) =>{
//         console.log(e.message)   
//     })



                // ********** getRequest func implement by promise *********
function getRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resp = JSON.parse(xhr.response)
                    resolve(resp)
                } else {
                    // reject(xhr.status)
                    reject(new Error('Error occurred'))
                }
            }
        }
        xhr.send()
    })

}

getRequest(`${BASE_URL}/users/1`)
    .then(data => {
        console.log(data)
    })
    .catch(e => {
        console.log(e)
    })
