const chunkArrayInGroups = (arr, size) => {
	// let middle = arr.length / size;
	let arr1 = [];
	for(var i = 0; i < size; i++){
		console.log(arr[i])
		arr1.push(arr[i]);
	}
	return arr1;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));