function mutations(arr){
	let test = arr[0].toLowerCase();
	let target = arr[1].toLowerCase();

	for(var i = 0; i < test.length; i++){
		console.log(target.indexOf(test[i]))
		if(target.indexOf(test[i]) < 0){
			return false;
		}
	}

	return true;
}

console.log(mutations(['Alien', 'line']));