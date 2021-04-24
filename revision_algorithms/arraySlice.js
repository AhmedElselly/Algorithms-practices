function arraySlice(arr, beginIndex, endIndex){
	if(!beginIndex && !endIndex){
		return arr;
	}
	var tempArr = [];
	if(!endIndex){
		endIndex = arr.length;
	}

	for(var i = beginIndex; i < endIndex; i++){
		console.log(i)
		tempArr.push(arr[i]);
	}
	// arr[beginIndex], arr[endIndex]
	// console.log(arr[beginIndex], arr[endIndex]);
	return tempArr;
}

console.log(arraySlice([1,2,3,4], 3));