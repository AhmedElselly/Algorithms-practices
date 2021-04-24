function findAndMatch(arr, result){
	for(var i = 0; i < arr.length; i++){
		for(var j = arr.length - 1; j >= 0; j--){
			console.log(arr[i], arr[j])
			if((arr[i] + arr[j]) == result){
				return `${arr[i]}, ${arr[j]}`
			}
		}
	}
	return -1;
}

console.log(findAndMatch([1,2,3,4,5], 9))