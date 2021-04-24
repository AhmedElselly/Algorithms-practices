function binarySearch(arr, val){
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while(val !== arr[middle] && start <= end){
		console.log(start, middle, end);
		if(val < arr[middle]){ // 8
			end = middle - 1; // 7
		} else {
			start = middle + 1;
		}
		middle = Math.floor((start + end) / 2);
	}
	console.log(start, middle, end)
	if(arr[middle] === val){
		return middle;
	}
	return -1;
}

console.log(binarySearch([1,2,3,4,7,8,12,14,15,16,20], 8));