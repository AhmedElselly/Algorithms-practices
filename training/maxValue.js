const maxValue = arr => {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > arr[i+1]){
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}

	}
	return arr;
}

console.log(maxValue([60,50,70,95,85]));