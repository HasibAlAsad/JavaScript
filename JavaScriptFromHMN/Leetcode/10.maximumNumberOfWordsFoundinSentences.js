var mostWordsFound = function(sentences) {
    var maxLength = 0
    for(x of sentences){
        
        var y= x.split(' ').length
        // console.log(y)
        if (y > maxLength){
            maxLength = y
        }
    }
    return maxLength
}

var m = mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])
console.log(m)