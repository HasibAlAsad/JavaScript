var runningSum = function(nums) {
    var j = 1
    var temp = nums[0]
    for (var i=0; i< nums.length-1 ;i++){
        temp = nums[i+1] + temp
        nums[j]= temp
        j++
    }
    return nums
};