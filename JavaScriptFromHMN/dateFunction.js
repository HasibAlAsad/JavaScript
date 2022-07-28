var date = new Date()

console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleDateString())


console.log('today '+date.getDay());   // 0 = Sunday, 1 = Monday, -----    6 = Saturday
console.log(date.getDate());
console.log(date.getFullYear())


console.log(date.toTimeString())
console.log(date.toLocaleTimeString())
console.log(date.toUTCString())
