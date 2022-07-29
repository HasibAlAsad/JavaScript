var obj = {
    math: 100,
    phy : 90
}

var obj2 = {
    math: 100,
    phy : 90
}

console.log(obj === obj2)  // for Object, it will show false. because comparison actually happen for storage in obj



if( obj.math == obj2.math && obj.phy == obj2.phy){
    console.log('true')
}else{
    console.log('false')
}


// ***** easy way *****

console.log(JSON.stringify(obj)=== JSON.stringify(obj2))