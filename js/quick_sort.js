// most useful.
// it's divide and conquer.
// use pivot element
// O( n log n)

function quick_sort(array){
    if(array.length <= 1){
        return array
    }

    const pivot = array[array.length - 1]
    const left = []
    const  right = []

    for(let i = 0; i < array.length-1; i++){
        if(array[i] < pivot){
            left.push(array[i])
        }
        else{
            right.push(array[i])
        }
    }

    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

console.log(quick_sort([5,7,4,9,6]))