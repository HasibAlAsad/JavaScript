var removeElement = function(nums, val) {
    if(nums.length == 0){
        return 0
    }
    let counter = 0
    for(var i = 0;i<nums.length;i++){
        if (nums[i]!= val){
            nums[counter]= nums[i]
            counter++

        }
    }
    // console.log(counter)
    // console.log(nums)
    return counter
}

removeElement ([0,1,2,2,3,0,4,2],2)