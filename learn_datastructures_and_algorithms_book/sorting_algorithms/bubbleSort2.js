const bubble = (arr) => {
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = 0; j < arr.length - i - 1; j++){
			console.log(arr[j], arr[j+1])
			if(arr[j] > arr[j+1]){
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}

	return arr;
}

console.log(bubble([3,2,1,4,5]))