const FibonacciSeries = (n) => {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

const fibSeries = FibonacciSeries(10);

fibSeries.forEach((num) => console.log(num));
