function abs(n){
	if(n >= 0) return n;
	else return -n;
}

console.log(abs(-100));

console.log(Math.ceil(1.2))

function round(n){
	const f = Math.floor(n);
	const c = Math.ceil(n);

	if(n-f > c-n) return c;
	if(c-n > n-f) return f;
	else return c;
}

console.log(round(1.4))