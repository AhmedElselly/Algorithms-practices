function sumUp(n){
	var count = 0;
	for(var i = 1; i <= n; i++){
		count += i;
		console.log(i)
	}
	console.log(count); // count = 6
}

sumUp(5)