                // ***********variable hoisting********
var a = 10

var b

console.log(a)
console.log(b)

b = 20

console.log(c)
var c = 50

                /* **********context Creational phase****
                a = undefined
                b = undefined
                c = undefined       */

                /* *******context Executinal phase*******
                a=10
                cons b jokhon kora hoise tokhon b = undefined
                b=20
                cons c jokhon kora hoise tokhon c = undefined   */


                // ********** Function hoisting*******
abc()

function abc(){
    console.log('i am function')
}

abc()

                /* **********context  Creational phase****
                abc = ref 

                ******* context Executinal phase*******
                abc() invoke korai ref dhore func ta execute hobe
                abc() invoke korai ref dhore func ta execute hobe  */ 

