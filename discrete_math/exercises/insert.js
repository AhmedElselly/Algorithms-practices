const array = [1, 3, 4, 5, 6, 8, 9, 11];

function insert(arr, x){
	if(arr.indexOf(x) === -1){
		// let max = arr[0];
		let n = arr.length - 1;
		arr[n + 1] = x + 1;
		let i = 0;
		while(x > arr[i]){
			i++;
		}
		for(var k = 0; k <= n - i; k++){
			arr[n - k + 1] = arr[n - k];
		}
		arr[i] = x;
		return arr;
	} else {
		return arr.indexOf(x);
	}
}

console.log(insert(array, 7));