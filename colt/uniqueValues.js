const unique = arr => {
	let count = 0;
	for(var i = 0; i < arr.length; i++){
		for(var j = i + 1; j < arr.length; j++){
			if(arr[i] !== arr[j]){
				count++;
			}
		}
	}
	return count;
}

console.log(unique([1,1,1,1,2]));
console.log(unique([1,2,3,4,4,4,7,7,13,13]));
