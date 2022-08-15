
        // ul (list) er innerHTML ta change korbo 

let listItem = document.getElementsByTagName('li')
// console.log(listItem)               // li er 3 ta array like data structure ashbe tai foreach loop cholbe na..
                                    // array te convrt korte hobe

// let listItemsArr = Array.from(listItem)      // convert korar way (1)
// let listItemsArr = Array.prototype.slice.apply(listItem)      // convert korar way (2)
let listItemsArr = [...listItem]                // convert korar way (3)

console.log(listItemsArr)               // li er 3 ta array ashbe

listItemsArr.forEach((li , index) => {
    let text = li.innerHTML
    li.innerHTML = `(${index+1}) ${text}`
} )
