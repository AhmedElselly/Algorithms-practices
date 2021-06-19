const binarySearch = (arr, x) => {
	let first = 0;
	let last = arr.length - 1;
	let middle = Math.floor((arr[first] + arr[last]) / 2);

	while(arr[middle] !== x){
		if(arr[middle] > x){
			last = middle - 1;
		} else {
			first = middle + 1;
		}
		middle = Math.floor((first + last) / 2)
	}

	return middle;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11, 12], 1));