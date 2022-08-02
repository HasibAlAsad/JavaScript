var rect ={
    width: 100,
    height: 50,

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

rect.draw()
// rect.height = 100
// rect.draw()


// function myFun (){
//     console.log(this)       // window object er shathe associated hobe
// }

// myFun()

var anotherObj ={
    width: 55,
    height: 44,
    
    print: rect.properties
}

anotherObj.print()