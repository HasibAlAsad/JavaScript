            // ****** Pass by value VS pass by reference*******
            // ****** Call by value VS call by reference*******


var n = 10
function change (n){
    n = n+100
    console.log(n)
}
change(n)             // 110 value ashbe
console.log(n)        // 10 value ashbe : n er value change hobe na cz ata PRIMITIVE data pass kora hoise ..
                        // PRIMITIVE data type er value func change korte pare na... ata k "Pass by Value" bole


var object = {
    a: 10,
    b:20
}
function changeMe (obj){
    obj.a = obj.a + 100
    obj.b = obj.b + 200
    console.log(obj)
}
changeMe(object)            // {a: 110, b: 220}       
console.log(object)         // {a: 110, b: 220} akhane same ashbe cz OBJECT data type er value func change korte pare
                            // ata k "Pass By Reference" bole..
                            // object er ai characteristics kei Object Mutibility bole.. mane jekono jaiga theke 
                            // obj er value change kora jai