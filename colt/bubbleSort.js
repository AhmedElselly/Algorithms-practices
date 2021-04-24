function bubble(arr){
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			console.log(arr)
			if(arr[j] > arr[j+1]){
				// Swap!
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubble([22,12,33,45, 35]));