var point = {
    x: 10,
    y: 20,
    z: 30
}
        // ***** 2 way to access ******
console.log(point.y)        // 1) dot notation (.)
console.log(point.y + point.z)


console.log(point['x'])      //  2) Array notation [''] 
console.log(point['x'] + point['y'])

    // ***** why we will use [""] notation ? -> to work with variable

var show = 'x'
// console.log(point.show)  // won't work
console.log(point[show])

console.log(point)

            // ***** to update a properties ********  

point.x = 100
point['y'] = 200
var t = 'z'
point[t] = 300

console.log(point)