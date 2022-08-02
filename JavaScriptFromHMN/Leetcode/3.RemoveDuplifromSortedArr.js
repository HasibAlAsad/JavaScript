var removeDuplicates = function(nums) {
    if ( nums.length==0){
        return 0
    }
    let j =1
    for (var i = 0; i < nums.length-1;i++){
        if (nums[i]!=nums[i+1]){
            nums[j] = nums[i+1]
            j++
        }
    }
    return j
}
nums = [-1,-1,0,0,1,1,2,2,2,3,4,5]
console.log(removeDuplicates (nums),nums)