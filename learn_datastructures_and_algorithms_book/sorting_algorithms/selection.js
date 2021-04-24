function selection(arr){
	const {length} = arr;
	let indexMin;
	for(var i = 0; i < length-1; i++){ //
		indexMin = i;
		for(var j = i; j < length; j++){
			if(arr[indexMin] > arr[j]){
				indexMin = j;
			}
		}
		if(i !== indexMin){
			swap(arr, i, indexMin);
		}
	}

	return arr;
}

function swap(arr, a, b){
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
	return temp;
}

function arrayNew(size){
	let arr = [];
	for(let i = size; i > 0; i--){
		arr.push(i);
	}
	return arr; // [5,4,3,2,1]
}

const array = arrayNew(5);

console.log(selection(array));