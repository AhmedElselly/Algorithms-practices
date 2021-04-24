// function power(n, p){
// 	const poweredN = Math.pow(n, p);
// 	// console.log(poweredN)
// 	return poweredN;
// }

// console.log(power(2, 2));

function power(base, exponent){
	if(exponent === 0) return 1;
	// console.log(base, exponent)
	// base * base * base
	const poweredN = power(base, exponent - 1);
	console.log(poweredN)
	return base * power(base, exponent - 1);
	// 2 * power(2, 2)
	// 2 * power(2, 1)
	// 2 * 1
}

power(2, 3)