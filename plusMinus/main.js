const plusMinus = arr => {
	let i = 0;
	let obj = {
		larger: 0,
		less: 0,
		zeros: 0
	};

	while(i < arr.length){
		if(arr[i] > 0){
			obj['larger'] += 1;
		} else if(arr[i] < 0) {
			obj['less'] += 1;
		} else {
			obj['zeros'] += 1;
		}
		i++;
	}
	
	console.log(obj)
	let totalLarger = obj['larger'] / arr.length;
	let totalLess = obj['less'] / arr.length;
	let totalZeros = obj['zeros'] / arr.length;
	let result = [totalLarger.toFixed(6), totalLess.toFixed(6), totalZeros.toFixed(6)]
	
	for(let int of result){
		console.log(int)
	}
}

// console.log(plusMinus([1, 1, 0, -1, -1]));
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));