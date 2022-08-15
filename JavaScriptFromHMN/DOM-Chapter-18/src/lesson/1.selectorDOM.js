// let var1 = document.getElementById('aaa')
// console.log(var1)

// let parag = document.getElementsByClassName('lead')
// console.log(parag)

// let bytag = document.getElementsByTagName('li')
// console.log(bytag)

// let byname = document.getElementsByName('second')
// console.log(byname)


                        //QuerySelector

// let var1 = document.querySelector('#aaa')
// console.log(var1)

// let parag = document.querySelector('.lead')
// console.log(parag)
// let parags = document.querySelectorAll('.lead')
// console.log(parags)

// let bytag = document.querySelectorAll('li')
// console.log(bytag)

// let byname = document.querySelector('[name^="second"]')
// console.log(byname)


            // ******* getElement vs queryselector*******

let li = document.getElementsByTagName('li')        // only HTML Element node 
let li2 = document.querySelectorAll('li')           // jekono node dhora jai

console.log(li)         // HTMLCollection(3)
console.log(li2)        // NodeList(3)

console.log(li.constructor.name)    //HTMLCollection
console.log(li2.constructor.name)   //NodeList

let ul = document.querySelector('ul')
console.log(ul.children)    // HTMLCollection(3)
console.log(ul.childNodes)    // NodeList(7) ; akhane li er uporer & nicher TEXT node(enter key) ashbe
