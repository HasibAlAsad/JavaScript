var arr= [
    [78,89,87,97],
    [77,86,54,67],
    [65,78,97,54]
]

// console.log(arr[0])     // it will show [78,89,87,97]

arr[0][2] = 100 // update

for( var i=0;i < arr.length ;i++){
    for(var j=0;j<arr[i].length;j++){       
        console.log('student '+ i + '\'s number : ' + arr[i][j])
    }

}