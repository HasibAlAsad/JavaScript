let title = document.getElementById ('aaa')
// console.log(title)

// title.style.color = 'red'
// title.style.color = '#f00'
// title.style.color = 'rgb(255,0,0)'
// title.style.fontSize = '50px'


let styleObj = {
    background: 'red',
    color: 'black',
    fontSize: '20px'
}

Object.assign( title.style , styleObj )

// list e assign 
let list = document.getElementById('list')

// Object.assign( list.style , styleObj )    // full list table er style

;[...list.children].forEach( li => {            // list.children = sob gula li(child) ......  child er style
    Object.assign(li.style , styleObj)
})



