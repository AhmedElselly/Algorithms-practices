const dublicates = arr => {
	let obj = {};
	for(var i = 0; i < arr.length; i++){
		obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
	}

	return obj
}

console.log(dublicates([1,2,3,3]));