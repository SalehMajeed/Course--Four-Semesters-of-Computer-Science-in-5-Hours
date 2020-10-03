function crossAdd(input){
    var answer = []
    for( let i=0; i< input.length; i++){
        let goingUp = input[i]
        let goingDown = input[input.length - 1 - i]
        answer.push(goingUp + goingDown)
    }
    return answer
}

console.log(crossAdd([1,2,3])) // O(n)

function find(needle, haystack){
    for(let i = 0; i<haystack.length; i++){
        if(haystack[i] == needle){
            return true
        }
    }
}

console.log(find(2,[1,2,3])) // O(n)

function make_tuples(input){
    var ans = []
    for(let i = 0; i<input.length; i++){
        for(let j = 0; j<input.length; j++ ){
            ans.push([input[i],input[j]])
        }
    }
    return ans
}

console.log(make_tuples([1,2,3])) // O(n^2)