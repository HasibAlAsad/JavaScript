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


// clone element

let lastListItem = list.lastElementChild.cloneNode(true)  // cloneNode() deeply clone korte pare na : 
lastListItem.innerHTML = 'four'                    // --only upper tag gulo k clone kore.. tai cloneNode(true)  
list.appendChild(lastListItem)                        // --dite hoi . tate tag er child tag o clone hoi


        // Getting Attribute
// console.log(list.attributes)              // array like data structure e sob gula attribute ashbe
// console.log(list.getAttributeNames())   // array akare ashbe
console.log(list.getAttribute('id'))        // only id er value ashbe : list
console.log(list.getAttribute('class'))     // only class er value ashbe : list-group
console.log(list.getAttributeNode('class'))  // whole class ashbe :  class="list-group"

        // Setting Attribute
// lastListItem.id = 'last-item'            // way (1)

lastListItem.setAttribute('id','last-item')  //way (2)

let attr = document.createAttribute('title')       // way (3)
attr.value = 'i m forth item'
lastListItem.setAttributeNode(attr)