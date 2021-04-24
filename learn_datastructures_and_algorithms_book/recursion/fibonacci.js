function fib(n) {
	const memo = [0, 1];
	const fibo = n => {
		if(memo[n] != null) return memo[n];
		return memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
	}
	return fibo(n);
}

console.log(fib(4))