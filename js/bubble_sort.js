// not useful in industrial code.
// compair two no. at a time and swap them.
// O(n^2)

function bubble_sort(array){
    
    // for(let x of array){
    //     for(let [index,value] of array.entries()){
    //             if(value > array[index + 1])
    //             {
    //                 [array[index +1 ], value] = [value, array[index + 1]]
    //             }
    //         }
    // }
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length - 1; j++){
            if(array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array
}

console.log(bubble_sort([5,7,6,8]))