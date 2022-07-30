        // *** TO BE a HIGHER ORDER FUNC : 
                    // 1-4. RULES OF FIRST ORDER FUNC      
                    //  5. WE CAN PASS FUNC AS an ARGUMENTS
                    //  6. WE CAN RETURN FUNC FROM ANOTHER FUNCTION

function add (a,b){
    return a+b
}

function manipulate(a,b, func){
    var c = a+b
    var d = a-b
    
    // function multiply(){
    //     var m = func (a,b)
    //     return c*d*m
    // }

    // return multiply

   
    return  function(){
        var m = func (a,b)
        return c*d*m
    }
    

}

var data = manipulate(3,4, add) // NOT add() : func name dite hobe , call kora jabe na.. call korle upore var m= func(a,b) kaj korbe na
console.log(data())  // call korte hobe 
