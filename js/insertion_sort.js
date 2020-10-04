// useful during partially sorted array.
// O(n^2) but effiecient more than bubble sort.

function insertion_sort(array){
    for(let i=1; i<array.length; i++){
        for(let j = 0; j<i; j++){
            if(array[i] < array[j]){
                const spliced = array.splice(i, 1)
                array.splice(j, 0, spliced[0])
            }
        }
    }
    return array
}

console.log(insertion_sort([4,2,6,3,9]))