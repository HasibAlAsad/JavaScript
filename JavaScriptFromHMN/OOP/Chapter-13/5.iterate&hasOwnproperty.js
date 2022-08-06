function Square (width){
    this.width = width              
                                //instance member
    this.getWidth = function (){
        console.log('my width is: '+this.width)
    }
    
}

Square.prototype.draw = function (){          // prototype er  moddhe ja thake tai prototype member
    this.getWidth()          
    console.log(this.width)
}

Square.prototype.toString = function(){               // prototype er toString k override kora holo:method override
    return 'my width is: '+this.width
}



var s1 = new Square(10)

console.log(Object.keys(s1))        // to get instance member

for(var i in s1){                   //to get instance and prototype member
    console.log(i)
}