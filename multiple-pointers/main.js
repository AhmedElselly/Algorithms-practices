const multiPointers = arr => {
	let first = 0;
	let last = arr.length - 1;

	while (first < last){
		if(arr[first] + arr[last] === 0){
			return [arr[first], arr[last]];
		}
		first++;
		last--;
	}

	return false;
}

console.log(multiPointers([-3, -2, -1, 0, 1, 2, 3]))
console.log(multiPointers([-2, 0, 1, 3]))