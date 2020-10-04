// have unique values
// no sense of order
// sets introduce in ES6
let set = new Set()

set.add(11)
set.add(22)
set.add(34)
set.add(43)
set.add(34) // not add because duplicate value
set.add(72)
set.add(523)

var x = set.entries()

console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)
console.log(x.next().value)