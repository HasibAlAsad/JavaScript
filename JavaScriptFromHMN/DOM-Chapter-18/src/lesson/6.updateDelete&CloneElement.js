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

let firstChild = list.firstElementChild

setTimeout (()=>{
    firstChild.innerHTML = firstChild.innerHTML +' (modified)'  //update first element
    firstChild.style.background = 'red'             // sob element er shathe style attribute thake
},5000)
 
// setTimeout(()=>{
    // list.lastElementChild.remove()          // last item remove hoye jabe
// },3000)

// clone element

let lastListItem = list.lastElementChild.cloneNode(true)  // cloneNode() deeply clone korte pare na : 
lastListItem.innerHTML = 'four'                    // --only upper tag gulo k clone kore.. tai cloneNode(true)  
list.appendChild(lastListItem)                        // --dite hoi . tate tag er child tag o clone hoi