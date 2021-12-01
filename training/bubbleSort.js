const bubbleSort = arr => {
	for(var i = 0; i < arr.length; i++){
		console.log(arr)
		for(var j = 0; j < arr.length - 1 - i; j++){
			if(arr[j] > arr[j+1]){
				let temp = arr[j];
				arr[j] = arr[j+1];	
				arr[j+1] = temp;
			}
		}
	}
	return arr
}

console.log(bubbleSort([100,60,50,70,95,85]));