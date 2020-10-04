// Map is key Value pair.
// no sense of order.
// introduced in ES6

let map = new Map()

map.x = 1
map.y = 2

map['z'] = 3

console.log(map)
console.log(map.x) // 1
console.log(map.y) // 2
console.log(map.z) // 3

map.set('key','value')

console.log(map.get('key')) // value