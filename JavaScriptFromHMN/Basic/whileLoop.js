// while(condition){
//     statment
// }

var isRunning = true

while (isRunning){
    var rand = Math.round (Math.random() * 50 )
    if(rand == 9){
        console.log('chicken dinner')
        isRunning = false
    }
    else {
        console.log('u got ' + rand)
    }
}