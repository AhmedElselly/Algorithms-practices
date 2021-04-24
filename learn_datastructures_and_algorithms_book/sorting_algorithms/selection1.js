// 1 - declare a variable to use later and keep tracking the smallest value.
// 2 - make an outer loop.
// 3 - make an inner loop and letting it start from the index of the outer loop to
// the end of the array.
// 4 - check if the value in the inner loop is less than the outer loop and swap

function selectionSort(array){
	let value;
	for(var i = 0; i < array.length; i++){
		value = i;
		
		for(var j = i; j < array.length; j++){
			if(array[j] < array[value]){
				value = j;
				
			}
		}

		if(i !== value){
			var temp = array[i];
			array[i] = array[value];
			array[value] = temp;
		}
	}

	return array;
}


console.log(selectionSort([5,4,3,2,1]));