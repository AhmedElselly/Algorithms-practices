function bubble(array, compareFn = defaultCompare){
	const {length} = array;
	for(var i = 0; i < length; i++){
		for(var j = 0; j < length - 1; j++){
			console.log(array[j]);
			if(array[j] > array[j+1]){
				swap(array, j, j+1)
			}
		}
	}
	return array;
}

function defaultCompare(a, b){
	return a < b ? 'less' : 'bigger';
}

function swap(array, a, b){
	const temp = array[a];
	console.log('temp', temp)
	array[a] = array[b];
	array[b] = temp;
	return temp;
}

function testingBubble(size){
	var arr = [];
	for(var i = size; i > 0; i--){
		arr.push(i);

	}
	console.log(arr)
	return arr;
}

const array = testingBubble(6);

console.log(bubble(array));