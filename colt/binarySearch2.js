const binarySearch = (arr, x) => {
	let first = 0;
	let right = arr.length - 1;
	let middle = arr.length / 2;
	while(first <= right && x !== arr[middle]){
		if(x < arr[middle]){
			right = middle - 1;
		} else {
			first = middle + 1;
		}
		middle = Math.floor((first + right) / 2);
	}

	if(x === arr[middle]){
		return middle;
	}
	return -1;
}

console.log(binarySearch([1,2,5,7,10,13,15,18,20,21], 15));