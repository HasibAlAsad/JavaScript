abc()

function abc (){                // func declaration
    console.log('i am abc') 
}

// newABC()            // error ashbe
var newABC = function (){           // func expresson
    console.log('i am newABC')

}
newABC()  


// **********context Creational phase****
// abc = ref 
// newABC = undefined

// *******context Executinal phase*******
// newABC = ref 