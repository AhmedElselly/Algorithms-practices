const symDifference = (array1, array2) => {
	let result = [];
	let obj = {};
	const fun = (arr1, arr2) => {
		for(var i = 0; i < arr1.length; i++){
			if(arr2.indexOf(arr1[i]) === -1){
				if(obj[i] !== arr1[i]){
					obj[i] = arr1[i];
				}				
			}
		}
	}
	
	fun(array1, array2);
	fun(array2, array1);
	for(let i in obj){
		result.push(obj[i])
	}
	return result;
}

console.log(symDifference([1, 2, 3], [5, 2, 1, 4, 5]));