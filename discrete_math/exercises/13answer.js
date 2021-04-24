const array = [1, 3, 4, 5, 6, 8, 9, 11];
            // f           m         l
            // if f = m
            //then         f     m
function linear(arr, x){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === x){
			return i;
		}
	}

	return -1;
}

// console.log(linear(array, 9))

function binary(arr, x){
	// assign our first element in the list
	let first = 0;
	// detect the length
	let last = arr.length;
	// having an empty variable for middle able to change in the future
	let middle;
	// looping if the first larger than the last
	while(first < last){
		// assign the middle as first + last / 2 to detect the middle index of the list
		middle = Math.floor((first + last) / 2);
		console.log(arr[middle])
		// if the target bigger than the middle element then detect the next element as first
		if(x > arr[middle]){
			first = middle + 1;
		} else {
			last = middle;
		}
	}
	if(x === arr[first]){
		return `the element is in index ${first}`;
	}
	return -1;
}

console.log(binary(array, 9))