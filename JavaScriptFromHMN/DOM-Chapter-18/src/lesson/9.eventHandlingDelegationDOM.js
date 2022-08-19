// let btn = document.getElementById('btn')
// console.dir(btn)

// btn.onclick = function(e){          // way (1)
//     console.log(e)
// }

// btn.addEventListener('click', function(e){       // way (2)
//     console.log(e)
// })


    // li  add by clicking the btn
let btn = document.getElementById('btn')
let list = document.getElementById('list')
btn.addEventListener('click', function(e){          // arrow func nile btn er reference ta pawa jai na
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'new item'
    list.appendChild(item)
})


    // mousemove event 
let box = document.getElementById('box')
box.addEventListener('mousemove', function(e){       // mousemove :- not camel case
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if(e.offsetX===100 && e.offsetY===0){
        alert('found 100,0')
    }
})



    //item delete & Event Delegation

// ;[...list.children].forEach( li => {
//     li.onclick = function(e){
//         // console.log(e.target)           // list one e click korle ata <li li class="list-group-item">....</li>
//         e.target.remove()
//     }
// });
// ai vabe delete korle html e age theke joto golu li silo oigulai only delete hobe
// newly added item gula delete hobe na..  
// EVENT DELEGATION PROBLEM bola hoi ata k....

//event delegation solution  : li k select na kore list take select kore kaj korte hobe
list.addEventListener('click', function(e){
    // console.log(list.contains(e.target))
    if(this.contains(e.target)){
        e.target.remove()
    }
})