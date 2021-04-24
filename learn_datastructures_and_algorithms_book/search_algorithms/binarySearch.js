const binary = (x, arr) => {
	let i = 0;
	let	j = arr.length - 1;
	let	m;
	while(i < j){
		m = Math.floor((i+j) / 2);
		if(x > arr[m]){
			i = m + 1;
		} else {
			j = m
		}
	}
	if(x === arr[i]){
		return i;
	}
	return -1;
}

console.log(binary(17, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));