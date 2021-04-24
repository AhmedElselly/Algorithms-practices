const array = [1, 8, 12, 9, 11, 2, 14, 5, 10, 4];
// [1,  2,  4,  5,  8, 9, 10, 11, 12, 14]
const maxSub = (arr) => {
	// making a pointer by subtracting second integer by first integer
	// iterate the array (outer loop)
	// iterate the array (insider loop) 
	// pointing j to be equal to the outer loop index next integer
	// checking if max less than the two next integers then exchange
	// retrun max
	let max = arr[1] - arr[0];
	for(var i = 0; i < arr.length; i++){
		for(var j = i + 1; j < arr.length; j++){
			// console.log(arr[i], arr[j])
			// max = arr[j] - arr[i];
			if(max < arr[j] - arr[j-1]){
				max = arr[j] - arr[j-1];
			}
		}
	}
	return max;
}

// const bubble = (arr) => {
// 	for(var i = 0; i < arr.length - 1; i++){
// 		for(var j = 0; j < arr.length - i - 1; j++){
// 			// console.log(arr[j], arr[j+1])
// 			if(arr[j] > arr[j+1]){
// 				let temp = arr[j];
// 				arr[j] = arr[j+1];
// 				arr[j+1] = temp;
// 			}
// 		}
// 	}

// 	return arr;
// }

console.log(maxSub(array));