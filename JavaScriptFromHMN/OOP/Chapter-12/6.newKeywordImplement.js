function Rectangle (W,H){
    this.width = W
    this.height= H
    
    this.draw = function(){
        console.log('I am a rectangle')
        this.properties()
        console.log(this)
            
    }
    
    this.properties = function(){
        console.log('My Width is '+ this.width)    
        console.log('My Height is '+ this.height)
    }
}

// var rectangle1 =  new Rectangle (100,50)  //Built in NEW keyword
// rectangle1.draw()


                // ************* Build our new keyword**********
                    
function myNew (constructor){
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype )
    var argsArr = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArr.slice(1))
    
    return obj
}

var rectObjWithMyNEW = myNew (Rectangle,400,350)
rectObjWithMyNEW.draw()