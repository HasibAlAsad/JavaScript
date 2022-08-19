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

let list = document.getElementById('list')


let newP = createElement('p','lead','lobjkabdb adjkadjka jaduhqah ajdhaudha auiohduah aduiohaudhqadh auidhauih uauhd qah hahd ahq  ahouidh ')
let newP2 = createElement('p','lead','lobjkabdb adjkadjka jaduhqah ajdhaudha auiohduah aduiohaudhqadh auidhauih uauhd qah hahd ahq  ahouidh ')

let div = createElement('div')

append(div,[newP,newP2])
// console.log(div)  

// let container = document.getElementById('cont')     // container dhore div add korte hoi but insert position
//                                                     // change kora jai na ai system e .. prob (1)
// container.appendChild(div)

// prob (1) solution
list.insertAdjacentElement("beforebegin",div)           // ul tag er baire upore
// list.insertAdjacentElement("afterbegin",div)            // ul tag er vitore first e
// list.insertAdjacentElement('beforeend',div)             // ul tag er vitore last e
// list.insertAdjacentElement("afterend",div)              // ul tag er baire last e