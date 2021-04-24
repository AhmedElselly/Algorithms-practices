const linear = (x, arr) => {
	let i = 0;
	let n = arr.length - 1;
	while(i < n && x != arr[i]){
		i++;
	}
	if(i <= n){
		return i;
	}
	return -1;
}

console.log(linear(7, [1,2,3,4,5,6,7]));