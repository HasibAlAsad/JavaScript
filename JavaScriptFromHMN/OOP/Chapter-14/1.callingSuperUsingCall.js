
        


function Shape (color){
    this.color = color
}

Shape.prototype.common = function(){
    console.log("I am a common funtion")
}


function Square (width,color){
    Shape.call(this, color)
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)       
Square.prototype.constructor = Square       

Square.prototype.draw = function(){
    console.log("width is "+this.width)
}

var square1 = new Square(45,'red')