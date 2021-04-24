const array = [1, 8, 12, 9, 11, 2, 14, 5, 10, 4];

const findMax = (arr) => {
	// declaring the first item in the array as maximum number.
	let max = arr[0];
	// keep iterating in the array
	for(var i = 0; i < arr.length - 1; i++){
		// comparing the maximum number with the next number
		if(max < arr[i]){
			// if next number bigger than the last declared maximum number equalize it
			max = arr[i];
		}
	}
	return max;	
}

console.log(findMax(array));