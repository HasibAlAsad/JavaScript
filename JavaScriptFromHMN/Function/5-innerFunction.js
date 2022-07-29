// function something(greet,name){
//     function sayHi(){
//         console.log(greet,name)
//     }

//     sayHi()
// }

// something("Good Morning",'Hasib al asad')


// function something(greet,name){
//     function sayHi(){
//         // console.log(greet,name.split(' ',1)+'')  // it was my thought : works
//         console.log(greet,name.split(' ')[0])
//     }

//     sayHi()
// }

// something("Good Morning",'Hasib al asad')

function something(greet,name){
    function getFirstName(){
       if(name){
            return name.split(' ')[0]
       } else {
        return ''
       }
    }

    var msg = greet +' '+ getFirstName() //NOTE: getFirstName func ta something func er baire call kora jabe na
    console.log(msg)
}

something("Good Morning",'Hasib al asad')