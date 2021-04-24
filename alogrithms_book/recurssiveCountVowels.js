function isVowel(letter){
	return ['a','e','i','o','u'].includes(letter);
}

function countVowelsRecurssive(str){
	if(str.length == 0) return 0; // if string length = 0; return 0
	let first = (isVowel(str[0]) ? 1 : 0); // 0,0,1
	return first + countVowelsRecurssive(str.slice(1));
}    

console.log(countVowelsRecurssive('The quick brown fox jumps over the lazy dog'));