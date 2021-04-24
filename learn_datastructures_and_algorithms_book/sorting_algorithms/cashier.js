const cashier = (integer, arr) => {
	let n = arr.length - 1;
	let d = {};

	for(var i = 0; i < n; i++){
		d[i] = 0;
		while(n > arr[i]){
			d[i]++;
			n-=arr[i];
		}
		
	}
	return d;
}

console.log(cashier(67, [25, 10, 5, 1]));