const movies = (arr, target) => {
	for(var i = 0; i < arr.length; i++){
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] + arr[j] === target){
				return [arr[i], arr[j]];
			}
		}
	}
	return false;
}

console.log(movies([80, 110, 40], 160))
console.log(movies([80, 110, 80], 160))
console.log(movies([20, 30, 110, 40, 50], 160))