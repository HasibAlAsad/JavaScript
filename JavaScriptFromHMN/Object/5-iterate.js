var obj = {
    math: 100,
    phy : 90,
    chem: 92
}

console.log( 'math' in obj)
console.log( 'a' in obj)


// ***********  Now ITERATE/TRAVERS for all KEY and VALUE *******
for(var i in obj){          // var i er moddhe property/key gula store hobe string akare
    console.log(i)      
    console.log(i+': '+obj[i])      // CAN'T USE (.) DOT NOTATION : obj.i
}