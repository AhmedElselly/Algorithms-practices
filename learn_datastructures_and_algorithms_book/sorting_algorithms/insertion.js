const insertion = (arr) => {
	// let m;
	for(var j = 1; j < arr.length - 1; j++){
		i = 0
		while(arr[j] > arr[i]){
			i++;
		}
		let m = arr[j];
		for(var k = 0; k < j - i; k++){
			arr[j-k] = arr[j-k-1];
		}
		arr[i] = m
		console.log(i)
	}

	return arr;
}

console.log(insertion([3,2,1,4,5]));