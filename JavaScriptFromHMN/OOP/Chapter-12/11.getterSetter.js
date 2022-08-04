
            // ****** var properties/ var position baire theke access nibo.. abstruction e agula abstruct kore rakha hoyesilo

var Rectangle = function (W,H){   // function Rectangle (W,H){} ai vabeo constructor banate paro.. iccha
    // var name = 'hasib'       //for (1)   
    this.width = W
    this.height= H
    var position = {    
        x: 45,
        y: 60
    }
    
    var properties = function(){      
        console.log('My Width is '+ this.width)    
        console.log('My Height is '+ this.height)
    }.bind(this)

    // this.getPosition = function (){      // way (1)
    //     return position
    // }

    this.draw = function(){
        console.log('I am a rectangle')
        properties()           
        console.log('Position: X='+position.x+' Y='+position.y)
            
    }
            //**** getter setter way */
    Object.defineProperty(this, 'posi', {   // 'posi' = jei name dewa hobe oi name diye call korte hobe, but () hobe na
        
        get: function () {      // positin property k baire theke access dei
            return position
        },
        
        set: function(value){       // positin property k baire theke change korte dei
            position = value
        }
    })

}

var Rect10 = new Rectangle(44,55)
// console.log(Rect10.getPosition())  // way (1)
console.log(Rect10.posi)        //  () hobe na
Rect10.posi = {
    x: 100,
    y: 200
}
console.log(Rect10.posi) 



