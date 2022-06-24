const countCandles = arr => {
	let max = Math.max(...arr);
	let count = 0;
	for(let i = 0; i < arr.length; i++){
		// console.log()
		if(arr[i] === max){
			count++;
		}
	}

	return count;
}

console.log(countCandles([4,4,3,1]));