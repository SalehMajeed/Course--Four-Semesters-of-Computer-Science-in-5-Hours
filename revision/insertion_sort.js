function insertion(array) {
    let i = 1;
    function loop() {
        if (array[i - 1] > array[i])
            [array[i - 1], array[i]] = [array[i], array[i - 1]];
            i++
    }

    if(String(array) != String(array.sort((a,b) => a - b))) loop()

    return array
}

console.log(insertion([12, 11, 13, 5, 6]));
