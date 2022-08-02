                    // ************** Call & Apply **********
                    
// function myFun(){
//     console.log(this)
//     console.log(this.a + this.b)
// }
// myFun()  // window object er shathe associated
// myFun.call({})               // call and apply method instant call kore
// myFun.apply({})




// function myFun(){                    // without Argument
//     console.log(this)
//     console.log(this.a + this.b)
// }
// myFun.call({a: 10,b: 20})
// myFun.apply({a: 100,b: 200})





// function myFun(c,d){                    // with Argument
//     console.log(this)
//     console.log(this.a + this.b +c + d)
// }
// myFun.call({a: 35, b: 45}, 10,20)
// myFun.apply({a: 35, b: 45},[5,10])          // apply er khetre arg array akare dite hobe



            // ************ Bind ***********


function myFun(c,d){                    
    console.log(this)
    console.log(this.a + this.b +c + d)
}
// myFun.bind({a: 35, b: 45}, 10,20)           // bind method call kore na.. just instant obj er shathe bind kore rakhe


var testBind1 = myFun.bind({a: 3, b: 7}, 10,10)  // arg aivabe dile value same ashbe sob obj er jonno
testBind1()

var testBind2 = myFun.bind({a: 3, b: 7})      
testBind2(10,20)                            // diff arg dite ai system