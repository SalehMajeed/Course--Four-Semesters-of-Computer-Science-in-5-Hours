function sum(number){
    if(number < 2) return number
    return number + sum(number-1)
}
console.log(sum(100)) // 5050