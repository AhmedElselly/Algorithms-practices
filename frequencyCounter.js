function frqCounter(str){
	var sorted = str.split('').sort();
	var data = [];
	var count = 0;
	for(var i = 0; i < sorted.length; i++){
		// console.log(sorted[i]);
		var last = data[data.length - 1];
		if(last && last.character === sorted[i]) last.count++;
		// data.character(sorted[i]);
		else data.push({character: sorted[i], count: 1})
	}

	return data;
}

console.log(frqCounter('hello world'))