var moveZeroes = function(nums) {
    if (nums.length == 0){
        return 0
    }
    let counter = 0
    let moveposi = 0
    for (var i=0; i< nums.length ; i++){
        if (nums[i]!=0){
            nums[counter]=nums[i]
            counter++
        }
        if (nums[i]==0){
            moveposi++
        }

    
    }

    while(moveposi>0){
        nums[nums.length - moveposi] = 0
        moveposi--
    }
    // console.log(counter)
    console.log(nums)
}

moveZeroes ([0,1,0,3,12])