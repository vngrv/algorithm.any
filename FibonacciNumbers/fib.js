function fibonacci(value) {
    return value <= 1 ? value : fibonacci(value - 1) + fibonacci(value - 2);
}

console.log(fibonacci(13));
