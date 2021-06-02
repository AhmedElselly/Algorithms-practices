const multiPointers = arr => {
	let array = [];
	let i = 0;	
	for(var j = 1; j < arr.length; j++){
		if(arr[i] !== arr[j]){
			i++
			arr[i] = arr[j]
		}
	}

	return i+1;
}

console.log(multiPointers([1,2,3,4,4,4,7,7,12,12,13]))