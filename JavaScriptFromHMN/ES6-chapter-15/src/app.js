// import x from './index'; 


            // *********** template string ***********

// var str = `                shfjwfnjwnurhwyfjis  iowjfnwoknfkjn wn
// rfyhdyhedyt
// yitu   `

// console.log(str.trim())


// var name = 'hasib'
// var age = 27

// console.log(`My name is ${name} and im ${age} years old`)
// console.log(`i am ${age < 18? 'not ' : ''}adult`)


// new mrthods includes, padStart , padEnd , repeat



                            // ******** Arrow function ************

// function add (a,b){
//     return a+b
// }

// let sum = (a,b) => {
//     return a+b
// }

// let sum = (a,b) => a+b          // single line hole {} and return na dileo chole
// let sqr = n => n*n 
// console.log(sum(4,5))
// console.log(sqr(5))





// ********* Arrow function er moddhe this thakle seta parent er this k refer kore.. Arrow func er kono this nai 
// ********* Arrow function e call,apply,bind method kaj kore

// let obj = {
//     name: 'Hasib',
//     print: function (){
//         console.log(this)            // {name: 'Hasib', print: ƒ} 
//         console.log(this.name)          // Hasib
//     }
// }
// obj.print()

// let obj = {
//     name: 'Hasib',
//     print: ()=> {
//         console.log(this)            // {} : object
//         console.log(this.name)    // undefined : cz use strict er baire ata window(parent) object k refer korse.
//     }
// }
// obj.print()

                // BUT

// let obj = {
//     name: 'Hasib',
//     print: function(){
//         console.log(this.name)  // Hasib
//         setTimeout(function(){
//             console.log(`hello, ${this.name}`)      //but ai Hasib show korbe na. cz setTimeout method er moddhe alada 
//         },1000)                                     // -function use kora hoise tai console er this ta window obj refer korbe
//     }
// }
// obj.print()

// solution

// let obj = {
//     name: 'Hasib',
//     print: function(){
//         console.log(this.name)  // Hasib
//         let self = this
//         setTimeout(function(){
//             console.log(`hello, ${self.name}`)      
//         },1000)                        
//     }
// }
// obj.print()

//another solution

// let obj = {
//     name: 'Hasib',
//     print: function(){
//         console.log(this.name)  // Hasib
//         setTimeout(function(){
//             console.log(`hello, ${this.name}`)      
//         }.bind(this),1000)                        
//     }
// }
// obj.print()



// let obj = {
//     name: 'Hasib',
//     print: function(){
//         console.log(this.name)  // Hasib
//         setTimeout(() => {                          //but arrow func always parent er this k refer korai ai this name k pabe
//             console.log(`hello, ${this.name}`)      
//         },1000)                        
//     }
// }
// obj.print()




            // ************ Default Parameter *************

// let sqr = (n=1) => n*n  // n=1 : kono argument pass na korle n er value 1 hobe and 1*1 return korbe
// console.log(sqr())

//disadvange of default parameter

// let greet = (name='Hasib',msg='hello') => {
//     console.log(name.length)            // Line 1
//     console.log(`${msg},${name}`)
// }
// greet(null,'good morning')    // default parameter e NULL and Undefined argument dewa jabe na.. dile Line 1 er moto in some case error ashbe




                    // ************* Rest & Spread Operator *************

// function sum (...rest){                 // ...  parameter hishebe thakle seta rest parameter
//     return rest.reduce((prev,curr) => prev + curr)
// }
// console.log(sum(1,2,3,4,5))

// // Object e spread operator use hoi clone korar kaje
// let obj = {
//     a: 10,
//     b: 20,
//     c: 30
// }
// let obj2 = {
//     ...obj                  // obj === obj2 : false .. obj2 akta alada object ja obj er upor dependent na.. mutability nai
// }                           // if  use let obj2 = obj thn obj change korle obj2 o change hoto.. ja spread op diye korai hobe na.
// console.log(obj2)




                // ********* Enhance object ***********

// let a = 10 , b = 20
// let obj ={
//     a: a,
//     b: b
// }
// console.log(obj)

// let obj ={
//     a,          // note: a -> a: a      
//     b
// }
// console.log(obj)

// let a = 10 , b = 20
// let obj ={
//     a: a,
//     b: b,
//     // print: function (){          // ata nicher system e likha jai es6 e
//     //     console.log(this)
//     // }
//     print(){
//         console.log(this)
//     }
// }
// obj.print()




                // *********** Destructuring **********

// let person = {
//     name: 'hasib',
//     email: 'hasib@gmail.com',
//     address: {
//         city: 'dhaka',
//         country: 'BD'
//     }
// }

// // now destructure obj 

// let {name,email,address:{city,country}}= person
// console.log(name,email,city,country)

// array destruturing tmn useful na 
// let arr = [1,2,3,4,5]

// let [first,second, , ,last] = arr
// console.log(first,second,last)



        // *********** Array 2 Object and Object 2 Array... entries and fromEntries********

// let obj ={
//     a: 10,
//     b: 20
// }

// console.log(Object.entries(obj))

// let arr = [
//     ['a',10],
//     ['b',20]
// ]

// console.log(Object.fromEntries(arr))





                     // ************* Iterator ************

// const arr = [1,2,3]

// for (var i = 0;i< arr.length ; i++){    // prob : iterates whole collection
//     console.log(arr[i])
// }
// console.log(i)

//solution

// function createIterator (collection){
//     let i = 0
//     return {
//         next (){                         // next: function(){}
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())



                    // *********** Iterator with Symbol *************
// Symbol : unique identifier

// whether a object is iterable 
// const arr = [1,2,3]
// console.log(arr[Symbol.iterator])   //ƒ values() { [native code] } means iterable
// console.log('str'[Symbol.iterator])     // same


// now iterator with Symbol
// const arr = [1,2,3]
// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// const str = 'Text'
// let iterateStr = str[Symbol.iterator]()
// console.log(iterateStr.next())
// console.log(iterateStr.next())
// console.log(iterateStr.next())
// console.log(iterateStr.next())
// console.log(iterateStr.next())



            // ************ for of loop ************

// const arr=[1,2,3]

// for( let v of arr){
//     console.log(v)
// }

// for (let x of 'Hasib Al'){
//     console.log(x)
// }

    // prob (1)

// let obj = {         //non-iterable instance : Object iterable na ..
//     a: 10,          // to make it iterable : objects must have a [Symbol.iterator]() method
//     b: 20
// }
// for(let z of obj){
//     console.log(z)
// }




            // *********** Custom iterator **************

    // prob (1) solution
// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function(){
//         let currentValue = this.start
//         return {
//             next: ()=>{
//                 return {
//                     done: currentValue > this.end,
//                     value: currentValue > this.end ? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }

// for (let v of obj){
//     console.log(v)
// }

// let iterateObj = obj[Symbol.iterator]()
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())




                    // ********* Generator ************

// function* generate (){
//     yield 1
//     yield 2
//     yield 3
//     return undefined    // ata na dileo cholbe.. 
// }
// let iterator = generate()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// let arr = [1,2,3,4]
// function* generate (collection){
//     for (let i = 0; i< collection.length ; i++){
//         yield[i]
//     }
// }

// let iterator = generate (arr)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* generate(){
//         let currentValue = this.start
//         while (currentValue <= this.end){
//             yield currentValue++
//         }
//     }
// }

// let iterateObj =  obj[Symbol.iterator]()
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())
// console.log(iterateObj.next())




            // ************* Set ************

// let set = new Set ([1,2,3])
// set.add(3)              // 3 already in the set . it will skip 3
// set.add(4)              // to add a element
// set.add(5)

// console.log(set)
// console.log(set.size)    // to check size
// set.delete(5)           // to delete a elem
// console.log(set)
// console.log(set.size)

// set.clear()             // to delete the whole set
// console.log(set)

// console.log(set.has(3))         // to check whether 3 in the set : true

// console.log(set.keys())         // SetIterator {1, 2, 3, 4, 5} : set e key value pair nai
// console.log(set.values())       // SetIterator {1, 2, 3, 4, 5} : set e key value pair nai

// console.log(set.entries ())  
    
        // set iterable howai for of loop use kora jabe

// let iterator = set.keys()   // or set.values
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// for (let v of set){
//     console.log(v)
// }




            // ************ Map/ Hash Map *************

// let map = new Map([
//     ['key1', 10],
//     ['key2', 30],           
//     ['key3', 30]
// ])

// map.set('key4', 40)
// map.set({name: 'Hasib'}, 400)               // key can be anything : here a object is key
// console.log(map)
// console.log(map.size)

// console.log(map.get('key2'))            // to search : use key

// map.delete('key4')
// console.log(map)

// //map.clear() 

// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// for (let [ k, v ] of map){              // key value destructure
//     console.log(k, v)
// }

// map.forEach((value, key) => {
//     console.log(key, value)
// })




                // ************* Weak Set ****************

// let A = {a: 10}, B = {b: 20}

// let set = new Set([A,B])            // set er moddhe obj , value  hishbe 
// console.log(set)

// A = null                // A object null korar por o A obj er value ashbe ... prob (1)
// console.log(set)

// let arr = [...set]      // akta set theke array newar system
// console.log(arr[0])         // A null korar por o value ase..  prob (1)

    //prob (1) solution

// let A = {a: 10}, B = {b: 20}
// let weakSet = new WeakSet ([A,B])           // only object value niye kaj kore

// A = null
// console.log(weakSet.has(A))     // false : A object nai
// console.log(weakSet.has(B))     // true : B ase



                // ******** Weak Map *************

// weak set er motoi




            // ************** Class in ES6 **************

// function Rectangle (width,height){
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function(){
//     console.log('Drawing...')
// }

// let rect = new Rectangle (10,20)
// console.log(rect)

// class Rectangle {
//     constructor(width, height){             // argument gula constructor er parameter e
//         this.width = width
//         this.height = height
//     }

//     draw() {                                 // argument gula constructor er parameter e jabe
//         console.log('Drawing...')
//     }
// }

// let rect = new Rectangle (10,20)
// console.log(rect)





            // ************* Class Properties *************

// class Rectangle {
//     constructor(width, height){             // argument gula constructor er parameter e jabe
//         this.width = width
//         this.height = height
//         this.test = ()=>{
//             console.log('coming from this.test instance')
//         }
//     }

//     test2 = function(){
//         console.log('coming from test2 instance')
//     }

//     name= 'hasib'

//     draw() {                        // ata proto er  moddhe jabe
//         console.log('Drawing...')
//     }
// }

// let rect = new Rectangle (10,20)
// console.log(rect)
// rect.test()
// rect.test2()
// rect.draw()




                        // *********** Static method **********

// class Person {
//     constructor (name, email){
//         this.name = name
//         this.email = email
//     }

//     print(){
//         console.log(this.name , this.email)
//     }

//     static create = function(str){                  // ai method class er shathe call hoi.. instance er shjathe noi
//         let person = JSON.parse(str)                // new Person diye jei obj banano hoi segula instance
//         return new Person(person.name,person.email)     //new Person('A','B') ai A B datar proyonjon nai . data string akare ase.. tai static method use kora
//     }

// }
// let str = '{"name": "talha","email": "dmaklnmdkal@dmkad.com"}'      // JSON string

// let p2 = Person.create(str)
// p2.print()

// console.log(p2 instanceof Person)




            // ******* this in class *************

// console.log(this) class er  moddhe always ai this always undefined dibe.. window object refer korbe na.
// class e 'use strict'(sobar upore likhe hoi) mode auto thake... 


//now cunstructor patter 
function Shape (){
    this.draw = function (){
        console.log(this)
    }
}

let s1 = new Shape()
s1.draw()           // atar khetre Shape object ashbe
let anotherS1 = s1.draw
anotherS1()         // atar khetre plugin thakle undefined, na thakle window obj ashbe.. 