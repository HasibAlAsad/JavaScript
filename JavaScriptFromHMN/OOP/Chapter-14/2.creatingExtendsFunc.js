
// function Shape (color){
//     this.color = color
// }

// Shape.prototype.common = function(){
//     console.log("I am a common funtion")
// }


// function Square (width,color){
//     Shape.call(this, color)
//     this.width = width
// }

// Square.prototype = Object.create(Shape.prototype)       
// Square.prototype.constructor = Square       

// Square.prototype.draw = function(){
//     console.log("width is "+this.width)
// }

// var square1 = new Square(45,'red')

// function Circle (radius,color){
//     this.radius = radius
//     Shape.call(this, color)
// }

// Circle.prototype = Object.create(Shape.prototype)       // (1) inherit and constructor reset line "Square" and "Circle" er jonno almost same and ja DRY er against e jasse.
// Circle.prototype.constructor = Circle

// var cir1 = new Circle(5,'Black')



                // ********** to remove this repeatation ***********
                
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


// Square.prototype = Object.create(Shape.prototype)       
// Square.prototype.constructor = Square   
extend(Shape,Square)    

Square.prototype.draw = function(){
    console.log("width is "+this.width)
}

var square1 = new Square(45,'red')

function Circle (radius,color){
    this.radius = radius
    Shape.call(this, color)
}

// Circle.prototype = Object.create(Shape.prototype)       // (1) inherit and constructor reset line "Square" and "Circle" er jonno almost same and ja DRY er against e jasse.
// Circle.prototype.constructor = Circle
extend(Shape,Circle)

var cir1 = new Circle(5,'Black')
