function gcd(n, m){
	var r = n % m;
	if(r === 0) return m;
	else return gcd(m, r);
}

function lcm(num1, num2){
	const resultGCD = gcd(num1, num2);
	const first = num2 / resultGCD;
	if(first){
		var second = num1 / resultGCD;
	}
	const result = {first, second};
	return result;
}

console.log(lcm(24, 30));