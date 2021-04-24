const game24 = (string) => {
	const str = string;
	const arr = [];
	for(var i = 0; i < str.length; i++){
		arr.push(Number(str[i]));
	}

	// 1 * 24 = 24
	// 2 * 12 = 24
	// 3 * 8 = 24
	// 6 * 4 = 24

	

	return arr;
}

console.log(game24('4878'))