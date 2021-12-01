const sumZeros = arr => {
	let first = 0;
	let last = arr.length - 1;
	// console.log(first, last)
	while(first < last){

		if(arr[first] + arr[last] === 0){
			return [arr[first], arr[last]];
		} else {
			first++;
			last--;
		}
	}
}

console.log(sumZeros([-3, -2, -1, 0, 1, 2, 3]));