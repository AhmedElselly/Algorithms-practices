function findRotatedIndex(arr, num){
	if(arr.includes(num)){
		for(var i = 0; i < arr.length; i++){
			if(arr[i] === num){
				return i;
			}
		}	
	}
	return -1;
}

console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 14));