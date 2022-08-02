var removeDuplicates = function(nums) {
    for (var i =0; i< nums.length ; i++){
        for(var j=i+1; j<nums.length;j++){
            if (nums[i]==nums[j]){
                nums.splice(j,1)
                
            }
         
        }
    }
    
    
};

removeDuplicates ([-1,-1,0,0,1,1,2,2,2,3,4,5])