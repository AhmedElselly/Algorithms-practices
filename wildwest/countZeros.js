function countZeros(arr){
	var count = 0;
	for(var i= 0; i < arr.length; i++){
		if(arr[i] === 0){
			count++;
		}
	}
	return count;
}

// console.log(countZeros([1,1,1,0,0]))
console.log(countZeros([1,1,1,1]))