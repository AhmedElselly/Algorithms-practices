function isVowel(letter){
	return ['a','e','i','o','u'].includes(letter);
}

function countVowels(str){
	var count = 0;
	for(var i = 0; i < str.length; i++){
		if(isVowel(str[i])){
			count++;
		}
	}
	return count;
}

console.log(countVowels('The quick brown fox jumps over the lazy dog'));