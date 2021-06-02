const objectCounter = str => {
	let obj = {};
	for(var i = 0; i < str.length; i++){
		console.log(obj[str[i]])
		if(obj[str[i]]){
			obj[str[i]] += 1;
		} else {
			obj[str[i]] = 1;
		}
	}

	let oddCounter = 0;

	for(let letter in obj){
		if(obj[letter] % 2 === 1){
			oddCounter++;
		}
	}
	console.log(oddCounter)

	return oddCounter <= 1;
}

console.log(objectCounter('racecar'));