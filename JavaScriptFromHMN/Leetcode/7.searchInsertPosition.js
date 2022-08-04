var searchInsert = function(nums, target) {
    var left = 0
    var right = nums.length -1
    var mid = 0

    while(left <= right){
        mid = parseInt ( (left + right )/ 2 )

        if(nums[mid]==target){
            return mid
        }
        if (nums[mid]> target){
            right = mid -1
        }
        if(nums[mid]<target){
            left= mid +1
        }
    }

    return left

};

console.log(searchInsert( [1,3,5,6,7,8,9],0))