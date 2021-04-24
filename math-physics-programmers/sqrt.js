function mathPower(n, m){
	let p;
	if(n < 0){
		p = Math.pow(-n, 1/m);
		if(Math.abs(Math.pow(-p, m)-n) < 0.1) return -p;
		else return 'No value';
	}else{
		return Math.pow(n, 1/m);
	}
}

console.log(mathPower(-1, 1/3))