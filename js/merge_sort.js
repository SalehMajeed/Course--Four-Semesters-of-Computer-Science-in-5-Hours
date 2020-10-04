// divide and conquer algorithm. 
// it is recursive.
// mostly used alogorithm.
// stable.
// O(n log n)

function merge_sort(array){
    if(array.length < 2){
        return array
    }

    const length = array.length
    const middle = Math.floor(length/2)
    const left = array.slice(0,middle)
    const right = array.slice(middle,length)

    const sorted_left = merge_sort(left)
    const sorted_right = merge_sort(right)

    return stitch(sorted_left, sorted_right)
}

const stitch = (left, right) =>{
    const results = []

    while(left.length && right.length){
        if(left[0] <= right[0]){
            results.push(left.shift())
        }
        else{
            results.push(right.shift())
        }
    }

    while(left.length){
        results.push(left.shift())
    }

    while(right.length){
        results.push(right.shift())
    }

    return results
}

console.log(merge_sort([4,5,3,1,2,7,6]))