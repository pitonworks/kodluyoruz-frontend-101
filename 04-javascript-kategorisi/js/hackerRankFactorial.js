function factorial(n) {
    // Base case: If n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: Multiply n by the factorial of (n-1)
    return n * factorial(n - 1);
}
