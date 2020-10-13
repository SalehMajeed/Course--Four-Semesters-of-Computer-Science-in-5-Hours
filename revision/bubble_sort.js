function sorts(numbers) {
    let i = 0;
    let x = String([... numbers.sort((a, b) => a - b)])
    function wrapper() {
        if (numbers[i] > numbers[i + 1]) {
            ([numbers[i], numbers[i + 1]] = numbers[i + 1]), numbers[i];
        }

        i++;

        if (i == numbers.length - 1) i = 0;

        if (String(numbers) != x) wrapper()

        return numbers;
    }
    return wrapper();
}

console.log(sorts([1, 24, 6, 2, 3])); // [1, 2, 3, 6, 24]
// console.log(sorts([2, 8, 1, 3, 6, 7, 5, 4])); // [1, 2, 3, 4, 5, 6, 7, 8]
