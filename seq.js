function seq(num){
	let sum;
	for(var i = 1; i < num; i++){
		for(var j = num; j >= 1; j--){
			sum = i + j
			console.log(sum)
		}
	}
	var result = sum * 100 / 2;
	return sum;
}

console.log(seq(100))