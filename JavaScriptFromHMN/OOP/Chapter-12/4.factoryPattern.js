// var rect ={
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am a rectangle')
//         this.properties()
//         // console.log(this)
        
//     },

//     properties: function(){
//         console.log('My Width is '+ this.width)     // object er nijer property use korte 'this' use kora lagbe
//         console.log('My Height is '+ this.height)
//     }
// }



// var rect2 ={
//     width: 200,
//     height: 150,

//     draw: function(){
//         console.log('I am a rectangle')
//         this.properties()
//         // console.log(this)
        
//     },

//     properties: function(){
//         console.log('My Width is '+ this.width)     // object er nijer property use korte 'this' use kora lagbe
//         console.log('My Height is '+ this.height)
//     }
// }

// rect.draw()
// rect2.draw()


function createRect (W,H){
    return {
        width: W,
        height: H,
    
        draw: function(){
            console.log('I am a rectangle')
            this.properties()
            // console.log(this)
            
        },
    
        properties: function(){
            console.log('My Width is '+ this.width)     // object er nijer property use korte 'this' use kora lagbe
            console.log('My Height is '+ this.height)
        }
    }
}

var createRect1 =  createRect (100,50)
var createRect2 =  createRect (200,150)       
var createRect3 =  createRect (300,250)

createRect1.draw()
createRect2.draw()
createRect3.draw()