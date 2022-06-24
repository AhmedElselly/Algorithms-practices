const sparseArray = (arr1, arr2) => {
	let i = 0;
	let output = [];
	console.log(arr2[0] === arr1[1]) //true
	// if(arr1.indexOf(arr2[0]) !== -1){
	//     console.log(arr1.indexOf(arr2[0]));
	// }
	let obj = {};
	while(i < arr1.length){
		if(!obj[arr1[i]]){
			obj[arr1[i]] = 1;
		} else {
			obj[arr1[i]]++;
		}
		i++;
	}

	let j = 0;
	while(j < arr2.length){
		if(obj[arr2[j]]){
			output.push(obj[arr2[j]]);
		} else {
			output.push(0)
		}
		j++
	}
	
	console.log(obj)
	return output
}

console.log(sparseArray(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))