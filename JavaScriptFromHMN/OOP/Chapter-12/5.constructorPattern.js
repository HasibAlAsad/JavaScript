function Rectangle (W,H){
    this.width = W
    this.height= H
    
    this.draw = function(){
        console.log('I am a rectangle')
        this.properties()
        // console.log(this)
            
    }
    
    this.properties = function(){
        console.log('My Width is '+ this.width)    
        console.log('My Height is '+ this.height)
    }
}

var rectangle1 =  new Rectangle (100,50)
rectangle1.draw()

var rectangle2 =  new Rectangle (200,150)
rectangle2.draw()

var rectangle3 =  new Rectangle (300,250)
rectangle3.draw()


var litObj ={
    width: 85,
    height: 87,
    
    print: rectangle1.properties      // Constructor pattern theke banano "OBJECT" er shathe (.) korte hobe
}

litObj.print()