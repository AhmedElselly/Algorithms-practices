function seekAndDestroy(array){
	var arr = arguments[0];
	var arg1 = arguments[1];
	var arg2 = arguments[2];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === arg1){
			// console.log(arr[i])
			var index = arr.indexOf(arr[i]);
			console.log(index)
		}
	}
	return arr;
}

console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3));
