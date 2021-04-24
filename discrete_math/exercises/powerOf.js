function power(x, n){
	let k = 1;
	if(n !== 0){
		for(var i = 0; i < n; i++){
			k*=x;
		}
	}
	if(n < 0) k = 1/Math.pow(x, -n);
	return k;
}

console.log(power(2, 2));
console.log(power(2, -1));