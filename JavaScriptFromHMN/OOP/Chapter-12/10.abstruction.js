
    
                 // ******** Property private kore ABstruction korte hoi*********


var Rectangle = function (W,H){   // function Rectangle (W,H){} ai vabeo constructor banate paro.. iccha
    // var name = 'hasib'       //for (1)   
    this.width = W
    this.height= H
    var position = {        //ai property ta abstraction kora hobe tai "this" hobe na.. var diye create korte hobe
        x: 45,
        y: 60
    }
    
    var properties = function(){       //ai func ta abstraction kora hobe tai "this" hobe na.. var diye create korte hobe
        console.log('My Width is '+ this.width)    
        console.log('My Height is '+ this.height)
    }.bind(this)

            // **** Note: abstruction korte var creation this.method gular upore rakhte hobe
            //***** jmn ta :- var properties , this.draw method er uporease
    
    this.draw = function(){
        console.log('I am a rectangle')
        properties()            // object er part na.. tai this dewa lagbe na
        console.log('Position: X='+position.x+' Y='+position.y)
            
    }

}

var Rect10 = new Rectangle(44,55)
// console.log(Rect10.name)         //for (1) 
Rect10.draw()
