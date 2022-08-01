var a = 11

function A (){
    var b = 12
    function B(){
        var c = 23
        console.log(c)
    }

    function C(){
        var d = 56
        console.log(d)
    }
    console.log(b)
    D()
    B()
    C()

}

function D(n){
    return n + a
}

                // ********** SCOPE CHAIN ********* 
// A -> a, b, B(), C(), D()      
// B -> c, b, a, B(), C(), D()
// C -> d, b, a, B(), C(), D()
// D -> n, a, A()