const fac = num => {
	let total = 1;
	for(var i = num; i > 0; i--){
		total *= i;
	}
	return total;
}

const recursiveFactoria = num => {
	if(num === 1) return num;
	return num * recursiveFactoria(num - 1)
}

console.log(recursiveFactoria(5))