const array = [1,3,4,5,6,8,9,11];

function binarySearch(arr, x){
	let i = 0; // first index in array
	let j = arr.length - 1; // last index of array
	let middle;

	while(i < j){
		middle = Math.floor((i + j) / 2);
		if(x > arr[middle]){
			i = middle + 1;
		} else {
			j = middle;
		}
	}

	if(x === arr[i]){
		return i;
	}

	return -1;
}

console.log(binarySearch(array, 5))