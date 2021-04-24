function factorial(n){
	var count = 1;
	for(var i = n; i > 0; i--){
		count *= i;
	}
	n = count;
	return n;
}

console.log(factorial(0)); // 6 solved