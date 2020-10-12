function power(number, times) {
    if (times < 2) return number;
    return number * power(number, times - 1);
}
console.log(power(2, 4)); // 16
