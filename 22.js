function fibonacci(n)
{
    if(n == 0)
    {
        return 0;
    } if(n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n -2);
    };
};

console.log(fibonacci(3));
console.log(fibonacci(0));
console.log(fibonacci(5));
console.log(fibonacci(1));
console.log(fibonacci(10));