function range(start, end, steps){
	var arr = [];
	for(var i = start; i <= end; i++){
		arr.push(i);
	}
	// console.log(arr)
	return arr;
}

const rangedArr = range(1,10);

function sum(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		count+=arr[i];
	}
	return count;
}

console.log(sum(rangedArr));