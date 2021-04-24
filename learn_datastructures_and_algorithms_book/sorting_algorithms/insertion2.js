const insetion2 = (arr) => {
	for(var j = 2; j < arr.length; j++){
		let key = arr[j];
		let i = j-1;
		while(i > 0 && arr[i] > key){
			arr[i + 1] = arr[i];
			i--;
		}
		arr[i+1] = key;
	}

	return arr;
}

console.log(insetion2([3,2,1,4,5]))