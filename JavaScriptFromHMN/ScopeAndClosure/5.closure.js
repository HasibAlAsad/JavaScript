// function test (){
//     var msg = 'learning lexical scope and closure'

//     function sayMsg (){
//         console.log(msg)
//     }

//     sayMsg()
// }

// test()

function test (){
    var msg = 'learning lexical scope and closure'

    return function (){
        console.log(msg)
    }

}

var sayMsg = test()
sayMsg()