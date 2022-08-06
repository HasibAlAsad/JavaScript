function Shape (){

}

Shape.prototype.common = function(){
    console.log("I am a common funtion")
}


function Square (width){
    this.width = width
}

Square.prototype = Object.create(Shape.prototype)       // Object.create  er maddhome Square obj , Shape obj k inherite korse
Square.prototype.constructor = Square       // constructor reset : ata na korle Square er constructor reset hoye tar moddhe Shape er constructor chole ashbe

Square.prototype.draw = function(){
    console.log("width is "+this.width)
}

var square1 = new Square(45)
                    
                // sqr1-> Square -> Shape -> Object

function Circle (r){
    this.radius = r
}


Circle.prototype = Object.create(Shape.prototype)   // Object.create  er maddhome Circle obj , Shape obj k inherite korse

var cir1 = new Circle(20)

// cir1-> Circle -> Shape -> Object
