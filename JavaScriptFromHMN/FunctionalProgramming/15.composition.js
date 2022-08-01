function printt (inp){
    console.log(inp)
}

function add (a,b){
    return a+b
}

function multiplyByFive ( x){
    return x * 5
}

printt(multiplyByFive(add(3,8)))      // add func er output multiplyByFive func er input = composition
                                      // multiplyByFive func er output printt func er input = composition 

