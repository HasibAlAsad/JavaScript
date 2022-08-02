// function Rectangle (W,H){
//     this.width = W
//     this.height= H
    
//     this.draw = function(){
//         console.log('I am a rectangle')
//         this.properties()
//         // console.log(this)
            
//     }
    
//     this.properties = function(){
//         console.log('My Width is '+ this.width)    
//         console.log('My Height is '+ this.height)
//     }
// }

// var rectangle1 =  new Rectangle (100,50)

function test (){
    console.log('something')
}
console.log(test.name, test.length)  // name = func name   , length = argument nmbr

            // ********* Func constructor use ******

var Rect = new Function ('W','H',` this.width = W
    this.height= H

    this.draw = function(){
        console.log('I am a rectangle')
        this.properties()
        // console.log(this)
            
    }

    this.properties = function(){
        console.log('My Width is '+ this.width)    
        console.log('My Height is '+ this.height)
    }`
)

var RectObj = new Rect ( 27,37)         
RectObj.draw()