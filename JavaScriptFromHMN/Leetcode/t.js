
 var shuffle = function(nums, n) {
    var xSide = nums.slice(0,n)
    var ySide = nums.slice(n)
    var res =[]

    for(var i=0; i< xSide.length;i++){
    
        res.push(xSide[i])
        res.push(ySide[i])
    }
    return res
}
shuffle([1,2,3,4,4,3,2,1],4)