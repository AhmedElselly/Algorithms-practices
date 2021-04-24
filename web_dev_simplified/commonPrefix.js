var longestPrefix = (strs) => {
	var prefix = '';
	for(var i = 0; i < strs[0].length; i++){
		var character = strs[0][i];
		for(var j = 0; j < strs.length; j++){
			// console.log(strs[j]);
			if(strs[j][i] !== character) return prefix;
		}
		prefix += character;
	}
	return prefix;
}


// console.log(longestPrefix(['apple', 'apply', 'ape', 'at']));
console.log(longestPrefix(['flower', 'flow', 'fly']));