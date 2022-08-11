var longestCommonPrefix = function(strs) {
    // console.log(strs)
    if (strs.length == 1){
        return strs[0]
    }

    for ( let i = 0; i<strs.length;i++){
        if (strs[i]== ""){
            return ""
        }
    }
    
    for ( let i=0; i <strs[0].length; i++){
        for(let j = 1; j< strs.length;j++){
            
            if(strs[0][i]!= strs[j][i]){
                return strs[0].slice(0,i)
            }
            
        }
    }
    return strs[0]
}

let x = longestCommonPrefix(["flower","flower","flower","flower"])
console.log(x)