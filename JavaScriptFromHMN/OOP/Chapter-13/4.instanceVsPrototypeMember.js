function Square (width){
    this.width = width              //instance member

    this.getWidth = function (){
        console.log('my width is: '+this.width)
    }
    // this.draw = function (){
    //     console.log(this.width)
    // }
}

Square.prototype = {
    draw: function (){          // prototype er  moddhe ja thake tai prototype member
        this.getWidth()          
        console.log(this.width)
    },
    toString: function(){               // prototype er toString k override kora holo:method override
                                        // buind in prototype er method overrite kora thik na.. pore problem face korte hote pare
        return 'my width is: '+this.width
    }
}


var s1 = new Square(10)
var s2 = new Square(20)
// console.log(s1)
// console.log(s2)

            // ****** draw method ta prototype er  moddhe dhukao ******


console.log(s1)
console.log(s2)
console.log(s1.toString())