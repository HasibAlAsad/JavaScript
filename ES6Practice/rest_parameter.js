"use strict";

function calculation(...numbers){    //...numbers rest parameter.. atar shathe onno parameter add korte hole emn- calculation(V1,V2,...numbers)
    let sum=0;
    for(let i of numbers){
        sum= sum+i;
    }
    console.log(sum);

}

calculation(1,2,3,4,5);