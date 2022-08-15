// let newLi = document.createElement('li')
// // console.log(newLi)
// newLi.className = 'list-group-item'         // classList/setAttribute diyeo class name dewa jai
// newLi.setAttribute('title','i am 4th item') 
// newLi.innerHTML= 'four'
// // console.log(newLi)

// let list = document.getElementById('list')
// list.appendChild(newLi)




// new arekta element create korteo atoo gula kaj kora, jate na lage tai function 

function createElement (tagname , className ,innerHtml ){
    let newEle = document.createElement(tagname)
    newEle.innerHTML = innerHtml || ""
    newEle.className = className || ""
    return newEle
}

// append function 
function append(parent, children){
    children.forEach(child => parent.appendChild(child));
}

let newLi = createElement('li','list-group-item','four')
newLi.setAttribute('title','i am 4th item')

append(list,[newLi])


let newP = createElement('p','lead','lobjkabdb adjkadjka jaduhqah ajdhaudha auiohduah aduiohaudhqadh auidhauih uauhd qah hahd ahq  ahouidh ')
let newP2 = createElement('p','lead','lobjkabdb adjkadjka jaduhqah ajdhaudha auiohduah aduiohaudhqadh auidhauih uauhd qah hahd ahq  ahouidh ')

let div = createElement('div')

append(div,[newP,newP2])
// console.log(div)  

let container = document.getElementById('cont')     // container dhore div add korte hoi
container.appendChild(div)