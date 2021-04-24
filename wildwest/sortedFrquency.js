function countedFrequency(arr, num){
	var count = 0;
	if(arr.includes(num)){
		for(var i = 0; i < arr.length; i++){
			if(arr[i] === num){
				count++;
			} 
		}	
		return count;
	}
	
	return -1;
}

console.log(countedFrequency([1,1,2,2,2,2,3], 4));