function multiplesof3and5(num){
	var count = [];
	for(var i = num; i > 0; i--){
		num--;
		if(num % 3 === 0 || num % 5 === 0){
			count.push(num);
		}		
	}

	var total = 0;
	for(var i = 0; i < count.length - 1; i++){
		total += count[i];
	}
}

multiplesof3and5(1000);