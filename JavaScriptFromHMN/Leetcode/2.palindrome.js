var isPalindrome = function(x) {
    var temp = x
    var res = 0
    if(temp < 0 || temp > Math.pow(2,31) - 1){
        return false
    }
    while(temp > 0){
        var reminder = temp % 10
        res = res * 10 + reminder
        temp = parseInt( temp / 10 )
    }
    
    
    if(x == res){
        return true
    } else {
        return false
    }
};
var r = isPalindrome(10)
console.log(r)
