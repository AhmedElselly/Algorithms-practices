function getIndexToIns(arr, num){
	arr.sort((a, b) => {
		return a - b;
	});

	for(var i = 0; i < arr.length; i++){
		if(arr[i] >= num){
			return i;
		}
	}

	return arr.length;
}

// console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));