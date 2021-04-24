function counteTrue(arr){
	let i = 0;
	let total = 0;
	while(i >= 0 && i < arr.length){
		if(arr[i] === true){
			total++;
		}
		i++;
	}
	
	return total;
}



console.log(counteTrue([true, false, true, false, true]))