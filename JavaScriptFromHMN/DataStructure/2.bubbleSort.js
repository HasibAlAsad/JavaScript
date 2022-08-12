let arr = [10,48,37,42,18,1,8,13,5,42,24,40]
function bubbleSort (arr){
    for (var i = 0; i< arr.length ; i++){
        for(var j = 0 ; j<arr.length-1-i;j++){
            if(arr[j]> arr[j+1]){
                var temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

var l = bubbleSort(arr)
console.log(l)