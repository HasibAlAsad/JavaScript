let arr = [10,48,37,42,18,1,8,13,5,42,24,40]
function insertionSort (arr){
    for (var i = 1 ; i< arr.length ; i++){
        let item = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>item){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]= item
    }

    return arr
    
}

var l = insertionSort(arr)
console.log(l)