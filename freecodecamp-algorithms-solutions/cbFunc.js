function cbFunc(arr, cb){
	var num = 0;
	for(var i = 0; i < arr.length; i++){
		num = arr[i];
		if(cb(num)) {
			return num;
		}
	}

	return undefined
	
}

console.log(cbFunc([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
