let arr = [10,48,37,42,18,1,8,13,5,42,24,40] // length = 12

function selectionSort (arr){
    for (let i = 0; i<arr.length;i++){
        let item = arr[i], indexof = i  // 0 dile hobe na
        for (var j = i+1; j<arr.length; j++){
            if (item > arr[j]){
                item = arr[j]                       // item = 
                indexof = j                   // j = 
            }
        }
        let temp = arr[i]
        arr[i]= item
        arr[indexof] = temp
    }

    console.log(arr)
}

selectionSort(arr)