function firstRecurring(str){
	var arr = [];
	var count = 0;
	for(var i = 0; i < str.length; i++){
		arr.push(str[i]);
	}

	for(var i = 0; i < arr.length; i++){
		console.log(arr.indexOf(arr[i]), i)
		if(arr.indexOf(arr[i]) !== i){
			return arr[i];
		}
	}

	return null;
}

console.log(firstRecurring('DCBABA'));
console.log(firstRecurring('ABC'));