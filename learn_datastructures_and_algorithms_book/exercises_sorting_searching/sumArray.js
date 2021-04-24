const array = [1, 8, 12, 9, 11, 2, 14, 5, 10, 4];

const sum = (arr) => {
	let count = 0;
	for(var i = 0; i <= arr.length-1; i++){
		count+=arr[i];
	}
	return count;
}

console.log(sum(array));