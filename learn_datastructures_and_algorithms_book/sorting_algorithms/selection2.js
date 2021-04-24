const array = [5,4,3,2,1];

const selection = arr => {
	let min;
	for(var i = 0; i < arr.length - 1; i++){
		min = i;
		for(var j = i; j < arr.length; j++){
			if(arr[min] > arr[j]){
				min = j;
			}
		}
		if(i !== min){
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr;

}

console.log(selection(array));