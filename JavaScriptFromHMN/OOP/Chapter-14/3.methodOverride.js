function extend (Parent, Child){
    Child.prototype = Object.create(Parent.prototype)       
    Child.prototype.constructor = Child  
}

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

extend(Shape,Square)    

Square.prototype.draw = function(){
    console.log("width is "+this.width)
}

var square1 = new Square(45,'red')

function Circle (radius,color){
    this.radius = radius
    Shape.call(this, color)
}

extend(Shape,Circle)

Circle.prototype.common = function() {              // common method override, extend er upore korle kaj hobe na.. cz extend(inherite) korar time e sob prototype reset kore feli
    // Shape.prototype.common.call(this)         // sometimes override korar por o ager implementation ta lagte pare.. shei khetre ata
    console.log('I\'ve overriden')
}



var cir1 = new Circle(5,'Black')