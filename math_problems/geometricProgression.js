const array = [8, 24, 72, 216];

function geometricProgression(arr, point){
	let ratio = arr[1] / arr[0];

	let result = arr[0]*Math.pow(ratio, point - 1);
	return result;
}


console.log(geometricProgression(array, 7));