let wr = (msg = '---------') => document.write(`<br>${msg}`);

function basic_recursion(max, current) {
    if (current > max) return; // best case
    wr(current);
    basic_recursion(max, current + 1);
}

basic_recursion(5, 1);

wr();
wr();
wr();

function fibonacci(n) {
    if(n <= 2){
        return 1
    }
    else{
        return fibonacci(n - 1) + fibonacci(n-2)
    }
}

for(let i=0; i<=20 ; i++){
    wr(`${i}.${fibonacci(i)}`)
}

function factorial(n){
    // if (n < 2) return 1
    // return n * factorial(n-1)


    return ( (n == 1)? 1 : 
             (!!n) ? (n * factorial(n - 1)) :  
              undefined)
}


console.log(factorial(0)) // undefined
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(4)) // 24
console.log(factorial(5)) // 120